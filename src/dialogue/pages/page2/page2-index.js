import Rx   from 'rx'
import view from './page2-view'

const Page2 = (sources) => {
  const props$ = sources.Props;
  const $view = view(props$);

  return {
    DOM: Rx.Observable.just($view),
    Props: props$,
  }
};

export default Page2
