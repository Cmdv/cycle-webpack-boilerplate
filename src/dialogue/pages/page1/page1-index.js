import Rx   from 'rx'
import view from './page1-view'

const Page1 = (sources) => {
  const $view = view(sources)
  return {
    DOM: Rx.Observable.just(view(sources)),
    Props: sources.Props,
  }
};

export default Page1
