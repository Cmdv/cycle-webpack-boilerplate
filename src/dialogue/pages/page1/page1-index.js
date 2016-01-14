import Rx   from 'rx'
import view from './page1-view'

const Page1 = (sources, props$) => {
  const $view = view(props$);

  return {
    DOM: Rx.Observable.just($view),
    props$,
  }
};

export default Page1
