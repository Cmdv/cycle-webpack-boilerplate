import {run}                                from '@cycle/xstream-run';
import {makeDOMDriver}                      from '@cycle/dom';
import {makeRouterDriver, supportsHistory}  from 'cyclic-router'
import {createHistory, createHashHistory}   from 'history'
import {rerunner, restartable}              from 'cycle-restart';
import main                                 from './main'

// we are pulling in our css files here for webpack to compile
require("!style!css!styles/pure-min.css");
require("!style!css!styles/layout.css");
require("!style!css!styles/grids-responsive-min.css");


const history = supportsHistory()
  ? [createHistory(), {capture: true}]
  : [createHashHistory(), {capture: false}]

// this is the Cycle run. first argument is our mainApp then an object:
// DOM is the ID or class we want the cycle to render onto our page
// History is using our makeHistoryDriver to deal with routing

const drivers = {
  DOM: makeDOMDriver('#application', {transposition: true}),
  router: makeRouterDriver(...history),
  // state$: makeStateDriver(),
};

const rerun = rerunner(run);
rerun(main, drivers);

if (module && module.hot) {
  module.hot.accept('./main', () => {
    const main = require('./main').default;
    rerun(main, drivers);
  });
  module.hot.accept();
}
