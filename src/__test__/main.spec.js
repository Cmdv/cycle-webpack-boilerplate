import test from 'tape';
import Rx from 'rx'
import createRenderTarget from './helper/createRenderTarget';
import {makeHistoryDriver} from '@cycle/history';

import Main from '../main';

import {h, makeDOMDriver, mockDOMResponse} from '@cycle/dom';
let Cycle = require('@cycle/core');


test('Main component tests', function(t) {
  t.plan(6);

  function mainApp(responses) {
    let requests = Main(responses)
    return requests
  }

  let {sinks, sources} = Cycle.run(mainApp, {
    DOM: makeDOMDriver(createRenderTarget()),
    History: makeHistoryDriver({
      // if you want hash: false you will need to set up a server
      hash: false,
      queries: true,
    }),
  });

  sources.DOM.select('.pure-g').observable.skip(1).take(1).subscribe(function (el) {
    console.dir(el); // []
  });
});
