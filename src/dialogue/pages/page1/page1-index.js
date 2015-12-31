import Rx   from 'rx'
import view from './page1-view'

const Page1 = (sources) => {
  const props$ = sources.History
    .map(({state}) => state)

  const $view = view(props$);

  return {
    DOM: Rx.Observable.just($view),
    Props: props$
  }
};

export default Page1
