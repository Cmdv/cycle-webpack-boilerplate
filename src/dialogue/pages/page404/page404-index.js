import xs from 'xstream'
import isolate from '@cycle/isolate'
import {div, h1} from '@cycle/dom'

function Page404 (sources) {
  return {
    DOM: xs.of(
      div({}, [
        h1('.welcome', 'Page 404')
      ]))
  }
}

export default sources => isolate(Page404)(sources)
// import xs   from 'xstream';
// import view from './page404-view'
//
// const Page404 = () => {
//   const view$ = xs.of(view());
//   return {
//     DOM: view$
//   }
// };
//
// export default Page404
