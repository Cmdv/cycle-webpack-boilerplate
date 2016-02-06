import {run}               from '@cycle/core';
import {makeDOMDriver}     from '@cycle/dom';
import {makeHistoryDriver} from 'cyclic-history'
import {makeRouterDriver}  from 'cyclic-router'
import {createHashHistory} from 'history'
import {makeStateDriver} from 'state-driver'

import Main                from './main'

// we are pulling in our css files here for webpack to compile
require("!style!css!styles/pure-min.css");
require("!style!css!styles/layout.css");
require("!style!css!styles/grids-responsive-min.css");

// this is the Cycle run. first argument is our mainApp then an object:
// DOM is the ID or class we want the cycle to render onto our page
// History is using our makeHistoryDriver to deal with routing
const sources = {
  DOM: makeDOMDriver('#application'),
  router: makeRouterDriver(makeHistoryDriver(createHashHistory())),
  state$: makeStateDriver()
  //state$: () => Rx.Observable.just({counter: 0})

};

run(Main,sources);
