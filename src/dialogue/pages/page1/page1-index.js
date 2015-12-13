import Rx   from 'rx'
import view from './page1-view'

const Page1 = (sources) => {
  //console.log(sources);
  return {
    DOM: Rx.Observable.just(view()),
    CounterState: sources.CounterState,
  }
};

export default Page1
