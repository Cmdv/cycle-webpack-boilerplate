import Rx     from 'rx';
import {h}    from '@cycle/dom'
import routes from './routes'
import {makeRouterDriver, createLocation} from 'cycle-router'


function content(sources) {
  const props$ = new Rx.ReplaySubject(1)
  const component$ = sources.router.define(routes)
    .map(({value/*, props$*/}) => {
      return value(sources, props$.startWith({counter: 0}))
    })

  return {
    DOM: component$.flatMapLatest(c => c.DOM),
    props$: component$.flatMapLatest(c => c.props$)
  }
}

export default content;
