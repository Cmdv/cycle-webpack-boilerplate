import Rx   from 'rx'
import view from './page1-view'

const Page1 = () => {
  return {
    DOM: Rx.Observable.just(view())
  }
};

export default Page1
