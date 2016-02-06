import Rx   from 'rx'
import view from './page1-view'

const Page1 = (sources) => {
  const state$ = sources.state$;
  const $view = view(state$);

  return {
    DOM: Rx.Observable.just($view),
    state$: state$,
  }
};

export default Page1
