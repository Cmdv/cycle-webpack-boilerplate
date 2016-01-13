import Rx     from 'rx';
import {h}    from '@cycle/dom'
import routes from './routes'
import {makeRouterDriver, createLocation} from 'cycle-router'


function content(sources) {
  const component$ = sources.router.define(routes)
    .flatMap(({path, value, fullPath, /*routeDefinitions,*/ props$}) => {
      props$.subscribe(x => console.log(x.counter))// not passed through to here
      return value(sources, props$)
    })

  const vtree$ = component$.flatMapLatest(c => c.DOM)
  const props$ = component$.flatMapLatest(c => c.props$)
  return {
    DOM: vtree$,
    props$
  }
}

export default content;
