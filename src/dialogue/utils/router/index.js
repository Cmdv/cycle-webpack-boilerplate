import Rx from 'rx'
import switchPath from 'switch-path'
import {createLocation, createHref} from 'history'
import {makeHistory, makePushState} from './history'

function filterPush(location) {
  return location.action === 'PUSH' ||
    location.action === 'REPLACE'
}

function isStrictlyInScope(namespace, path) {
  const pathParts = path.split('/').filter(x => x.length > 0)
  return namespace.every((v, i) => {
    return pathParts[i] === v
  })
}

function makeDefinitionResolver(source$) {
  return function definitionResolver(routeDefinitions, props$ = null) {
    const namespace = this.namespace
    const props$_ = props$ === null ? this.props$ : props$
    console.log('inside router: ', routeDefinitions);
    const history$ = this.history$
    return source$
      .map(({pathname}) => {
        const pathParts = pathname.split('/').filter(x => x.length > 0)
        const path_ = pathParts.filter(i => namespace.indexOf(i) < 0).join('/')
        const {path, value} = switchPath(`/${path_}`, routeDefinitions)
        return {
          path,
          value,
          routeDefinitions,
          fullPath: pathname,
          props$: props$_.shareReplay(1).do(x => console.log('inside router B: ', x)),
          history$,
        }
      })
      .filter(({path}) => path !== null)
      .share()
  }
}

function makePathFilter(source$) {
  return function pathFilter(path, props$ = null) {
    const namespace = this.namespace
    const props$_ = props$ === null ? this.props$ : props$
    const history$ = this.history$
    const scopedNamespace = namespace.concat(
      path.split(`/`).filter(s => s.length > 0)
    )
    const scopedSource$ = source$
      .filter(({pathname}) => {
        return isStrictlyInScope(scopedNamespace, pathname)
      }).share()
    return {
      namespace: scopedNamespace,
      observable: scopedSource$,
      path: makePathFilter(scopedSource$),
      define: makeDefinitionResolver(scopedSource$, props$),
      props$: props$_.shareReplay(1),
      history$,
    }
  }
}

const defaultOptions = {
  hash: true,
  basename: '/',
}

function makeRouterDriver(config = defaultOptions) {
  const {hash, ...options} = config
  const history = makeHistory(hash, options)

  return function routerDriver(sink$) {
    const source$ = new Rx.ReplaySubject(1)
    const history$ = new Rx.ReplaySubject(1)
    sink$.subscribe(makePushState(history))

    history.listen(({pathname, ...location}) => {
      const path = pathname === '/' ?
        pathname : `/${pathname}`
      source$.onNext({pathname: path, ...location})
      if (location.action !== 'POP') {
        history$.onNext(location)
      }
    })

    return {
      namespace: [],
      observable: source$.filter(filterPush).share(),
      path: makePathFilter(source$.filter(filterPush)),
      define: makeDefinitionResolver(source$.filter(filterPush)),
      props$: Rx.Observable.just({}).replay(1),
      history$,
    }
  }
}

export {makeRouterDriver, createLocation, createHref}
