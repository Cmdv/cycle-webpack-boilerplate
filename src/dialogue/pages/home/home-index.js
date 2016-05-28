import xs from 'xstream'
import isolate from '@cycle/isolate'
import {div, h1} from '@cycle/dom'

function Home (sources) {
  return {
    DOM: xs.of(
      div({}, [
        h1('.welcome', 'Cycle.js Home')
      ]))
  }
}

export default sources => isolate(Home)(sources)


//
// export default Home
