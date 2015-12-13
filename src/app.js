import Cycle                from '@cycle/core';
import {makeDOMDriver}      from '@cycle/dom';
import {makeHistoryDriver}  from '@cycle/history';
import Main                 from './main'

// we are pulling in our css files here for webpack to compile
require("!style!css!styles/pure-min.css");
require("!style!css!styles/layout.css");
require("!style!css!styles/grids-responsive-min.css");

// creating our mainApp from /.main
function mainApp(sources) {
  let requests = Main(sources);
  return requests
}

// this is the Cycle run. first argument is our mainApp then an object:
// DOM is the ID or class we want the cycle to render onto our page
// History is using our makeHistoryDriver to deal with routing
const sources = {
  DOM: makeDOMDriver('#application'),
  History: makeHistoryDriver({hash: false, queries: true,}),
};

Cycle.run(mainApp,sources);
