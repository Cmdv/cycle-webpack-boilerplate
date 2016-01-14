import Rx     from 'rx';
import {h}    from '@cycle/dom'
import routes from './routes'
import {makeRouterDriver, createLocation} from 'cycle-router'


function content(sources) {
  sources.router.props$.subscribe(x => console.log(x))
  const props$ = sources.router.props$;
  const component$ = sources.router.define(routes)
    .map(({value/*, props$*/}) => {
      return value(sources, props$)
    })

  return {
    DOM: component$.flatMapLatest(c => c.DOM),
    props$: component$.flatMapLatest(c => c.props$)
  }
}
export default content;
