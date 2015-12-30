import Rx   from 'rx'
import view from './page404-view'

const Page404 = () => {
  const view$ = Rx.Observable.just(view());
  return {
    DOM: view$
  }
};

export default Page404
