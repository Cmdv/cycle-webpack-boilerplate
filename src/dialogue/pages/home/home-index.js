import Rx from 'rx'
import view from './home-view'

const Home = (responses) => {

  const view$ = Rx.Observable.just(view());

  return {
    DOM: view$
  }
}

export default Home
export {Home}
