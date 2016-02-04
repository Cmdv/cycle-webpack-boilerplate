import Rx     from 'rx';
import {h}    from '@cycle/dom'
import routes from './routes'
import {makeRouterDriver, createLocation} from '../../utils/router'

function content(routes$, sources) {

  const component$ = routes$.define(routes)
    .map(({props$, value}) => {
      const Component$ = value(sources, props$);

      return {
        Comp: Component$,
        Props: Component$.props$
      }
    })

  return {
    DOM: component$.flatMapLatest(c => {
      return c.Comp.DOM
    }),
    props$: component$.flatMapLatest(c => {
      console.log('Router props$: ', c.Props);
      return c.Props
    })
  }
}
export default content;
