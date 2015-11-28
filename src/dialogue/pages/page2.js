import Rx from 'rx'
import {h, div, h1,} from '@cycle/dom'


const view = () => {
  return div([
    h1('.content-subhead',['Page 2']),
    h1([`Now you are on Page 2`])
  ])
}

const Page2 = () => {

  const view$ = Rx.Observable.just(view());
  return {
    DOM: view$
  }
}

export default Page2
