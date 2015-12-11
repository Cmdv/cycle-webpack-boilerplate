import {div, h1, h} from '@cycle/dom'
import Home from '../dialogue/pages/home/home-index'
import Page1 from '../dialogue/pages/page1/page1-index'
import Page2 from '../dialogue/pages/page2/page2-index'

function routes(sources) {
  return {
    '/': Home(sources).DOM.shareReplay(1),
    '/page1': Page1(sources).DOM.shareReplay(1),
    '/page2': Page2(sources).DOM.shareReplay(1),
    '*': h1(`Page could not be found`),
  }
}

export default routes


// --------------------------------------------------------- //
// new function but not entirely sure because not sure where
// to put '/' & '/page1'

function routed_1(sources) {
  return {
    '/': Home(sources),
    '/page1': Page1(sources),
    '/page2': Page2(sources),
    '*': h1(`Page could not be found`),
  }
}

function routes_1(sources) {
  const routeValue$ = routed_1(sources);
  const componentDom$ = routeValue$.map(c => c.DOM.shareReplay(1))
  const componentState$ = routeValue$.map(c => c.CounterState)
  return {
    DOM: componentDom$,
    CounterState: componentState$
  }
}

// export default routes_1
