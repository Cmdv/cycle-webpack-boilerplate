import Rx     from 'rx';
import {h}    from '@cycle/dom'
import routes from './routes'
import {makeRouterDriver, createLocation} from 'cycle-router'


function ContentRouter(sources) {
  console.log(sources);
  const component$ = sources.router.define(routes)
    .flatMap(({value, props$}) => {
      return value(sources, props$)
    })

  const vtree$ = component$.flatMapLatest(c => c.DOM)
  const props$ = component$.flatMapLatest(c => c.props$)
  return {
    DOM: vtree$,
    props$
  }
}

export default ContentRouter;
