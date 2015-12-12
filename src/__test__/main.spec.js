import test                 from 'tape';
import Rx                   from 'rx'
import createRenderTarget   from './helper/createRenderTarget';
import {makeHistoryDriver}  from '@cycle/history';
import Main                 from '../main';
import {run}                from '@cycle/core';
import {h,makeDOMDriver,mockDOMResponse} from '@cycle/dom';

test('Main component tests', function(t) {
  t.plan(3);
  // mock the Main component and pass it the sources
  function mainComponent(sources) {
    let requests = Main(sources)
    return requests
  }

  // Pass Main through our RenderTarget
  let {sinks, sources} = run(mainComponent, {
    DOM: makeDOMDriver(createRenderTarget()),
    History: makeHistoryDriver({
      hash: false,
      queries: true,
    }),
  });
  // take our sources.Dom and select a class from it then subscribe and start testing against the results
  sources.DOM.select('.pure-g').observable.skip(1).take(1).subscribe(function (el) {

    t.equal(Array.isArray(el), true, 'Our subscription output is an array');
    const childrenEls = el[0].childNodes;
    t.equal(childrenEls[0].className, "sidebar pure-u-1 pure-u-md-1-4", "the first node should be the sidebar");
    t.equal(childrenEls[1].className, "content pure-u-1 pure-u-md-3-4", "the second node should be the content");
  });
});
