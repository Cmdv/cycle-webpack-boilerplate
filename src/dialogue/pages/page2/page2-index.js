import Rx   from 'rx'
import view from './page2-view'

const Page2 = (sources) => {
  const state$ = sources.state$;
  const $view = view(state$);

  return {
    DOM: Rx.Observable.just($view),
    state$: state$,
  }
};

export default Page2
