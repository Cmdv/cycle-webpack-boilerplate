import xs from 'xstream'
import isolate from '@cycle/isolate'
import {div, h1} from '@cycle/dom'

function Page1 (sources) {
  return {
    DOM: xs.of(
      div({}, [
        h1('.welcome', 'Page 1')
      ]))
  }
}

export default sources => isolate(Page1)(sources)

// import xs   from 'xstream';
// import view from './page1-view'
//
// const Page1 = (sources) => {
//   const props$ = sources.Props;
//   const $view = view(props$);
//
//   return {
//     DOM: xs.of($view),
//     Props: props$,
//   }
// };
//
// export default Page1
