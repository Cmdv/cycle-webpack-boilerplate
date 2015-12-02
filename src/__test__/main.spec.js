import test from 'tape';
import Rx from 'rx'
import createRenderTarget from './helper/createRenderTarget';

import Main from '../main';

let CycleDOM = require('@cycle/dom');
let Cycle = require('@cycle/core');
let {h2, h3, h4, div, h, makeDOMDriver} = CycleDOM;



test('Main component tests', function(t) {
  t.plan(6);

  function app(sources) {
    return {
      DOM: Rx.Observable.just(
        h([Main])
      )
    };
  }

  let {sinks, sources} = Cycle.run(app, {
    DOM: makeDOMDriver(createRenderTarget())
  });


  sources.DOM.select('.pure-g').observable.skip(1).take(1).subscribe(function (el) {
    console.dir(el); // []
  });
});
