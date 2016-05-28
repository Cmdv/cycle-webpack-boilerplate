import xs from 'xstream'
import isolate from '@cycle/isolate'
import {div, h1} from '@cycle/dom'

function Page2 (sources) {
  return {
    DOM: xs.of(
      div({}, [
        h1('.welcome', 'Page 2')
      ]))
  }
}

export default sources => isolate(Page2)(sources)

// import xs   from 'xstream';
// import view from './page2-view'
//
// const Page2 = (sources) => {
//   const props$ = sources.Props;
//   const $view = view(props$);
//
//   return {
//     DOM: xs.of($view),
//     Props: props$,
//   }
// };
//
// export default Page2
