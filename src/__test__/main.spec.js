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



  sources.DOM.select(':root').observable.skip(1).take(1).subscribe(function (root) {
    t.equal(Array.isArray(root), true, 'the element should be an Array');

    t.equal(root.length, 1, 'the length of the element should be 1' );

    let element = root.querySelector('#layout')

    t.notEqual(element, null);
    t.notEqual(typeof element, 'undefined');

    console.log(sources)

    t.equal(element.class, 'poop');
    t.equal(element.textContent, 'Correct');
  });
});
