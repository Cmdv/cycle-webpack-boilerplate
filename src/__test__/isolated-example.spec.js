import test from 'tape';
import Rx from 'rx'
import createRenderTarget from './helper/createRenderTarget';

let CycleDOM = require('@cycle/dom');
let Cycle = require('@cycle/core');
let {h2, h3, h4, div, makeDOMDriver} = CycleDOM;



test('Dom tests', function(t) {
  t.plan(6);

  function app(sources) {
    return {
      DOM: Rx.Observable.just(
        h3('.top-most', [
          sources.DOM.isolateSink(Rx.Observable.just(
            div('.foo', [
              h4('.bar', 'Wrong')
            ])
          ), 'ISOLATION'),
          h2('.bar', 'Correct'),
        ])
      )
    };
  }

  let {sinks, sources} = Cycle.run(app, {
    DOM: makeDOMDriver(createRenderTarget())
  });

  sources.DOM.select('.bar').observable.skip(1).take(1).subscribe(function (elements) {

    console.dir(elements);

    t.equal(Array.isArray(elements), true);
    t.equal(elements.length, 1);
    const correctElement = elements[0];
    t.notEqual(correctElement, null);
    t.notEqual(typeof correctElement, 'undefined');
    t.equal(correctElement.tagName, 'H2');
    t.equal(correctElement.textContent, 'Correct');
    t.end()
  });
});
