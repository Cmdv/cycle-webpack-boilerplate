import test                 from 'tape';
import Rx                   from 'rx'
import createRenderTarget   from './helper/createRenderTarget';
import {makeHistoryDriver}  from '@cycle/history';
import Navbar               from '../dialogue/navbar';
import Cycle                from '@cycle/core';
import {h,makeDOMDriver,mockDOMResponse} from '@cycle/dom';

test('Navbar tests', function(t) {
  t.plan(3);

  // mock the Main component and pass it the responses
  function mainComponent(responses) {
    let requests = Navbar(responses)
    return requests
  }

  // Pass Main through our RenderTarget
  let {sinks, sources} = Cycle.run(mainComponent, {
    DOM: makeDOMDriver(createRenderTarget()),
    url$: '/'
  });

  // Uncaught TypeError: drivers[_name2] is not a function

  sources.DOM.select('.myelementclass').events('click').subscribe(ev => {
    console.dir(ev.type)
    t.equal(ev.type, 'click');
  });
});
