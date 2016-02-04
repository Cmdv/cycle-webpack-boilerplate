import Rx   from 'rx'
import view from './page2-view'

const Page2 = (sources, props$) => {
  const $view = view(props$);

  return {
    DOM: Rx.Observable.just($view),
    props$,
  }
};

export default Page2
