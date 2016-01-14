import Cycle                from '@cycle/core';
import {makeDOMDriver}      from '@cycle/dom';
import Rx                   from 'rx';
import Main                 from './main'
import {makeRouterDriver, createLocation} from 'cycle-router'

// we are pulling in our css files here for webpack to compile
require("!style!css!styles/pure-min.css");
require("!style!css!styles/layout.css");
require("!style!css!styles/grids-responsive-min.css");

// creating our mainApp from /.main


function mainApp(sources) {
  const props$ = Rx.Observable.just({counter: 0});
  const routes$ = sources.router.path('/', props$);

  const main = Main({router: routes$, ...sources});
  return {
    DOM: main.DOM,
    router: main.router.startWith('/'),
    props$: main.props$
  }
}

const sources = {
  DOM: makeDOMDriver('#application'),
  router: makeRouterDriver({hash: true})
};

Cycle.run(mainApp,sources);
