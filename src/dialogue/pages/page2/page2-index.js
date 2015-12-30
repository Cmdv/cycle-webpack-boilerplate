import Rx   from 'rx'
import view from './page2-view'

const Page2 = (sources) => {
  return {
    DOM: Rx.Observable.just(view()),
    Props: sources.Props,
  }
};

export default Page2
