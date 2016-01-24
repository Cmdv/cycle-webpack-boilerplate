import Rx     from 'rx';
import {h}    from '@cycle/dom'
import routes from './routes'
import {makeRouterDriver, createLocation} from 'cycle-router'


function content(routes$, sources) {

  const component$ = routes$.define(routes)
    .map(({props$, value}) => {

      const Component$ = value(sources, props$);
      const Props$ = Component$.props$ ? routes$.props$ = Component$.props$ : sources.Props;

      return {
        Comp: Component$,
        Props: Props$
      }
    });

  return {
    DOM: component$.flatMapLatest(c => {
      c.Props.subscribe(x => console.log('Router2: ', x));
      return c.Comp.DOM
    }),
    props$: component$.flatMapLatest(c => {
      c.Props.subscribe(x => console.log('Router3: ', x)); //doesn't come through
      return c.Props
    })
  }
}

export default content;
