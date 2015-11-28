import Rx from 'rx'
import {h, div, h1,} from '@cycle/dom'


const view = () => {
  return div([
    h1('.content-subhead',['Home Page']),
    h1([`Welcome to the Home Page`])
  ])
}

const Home = () => {

  const view$ = Rx.Observable.just(view());
  return {
    DOM: view$
  }
}

export default Home
export {Home}
