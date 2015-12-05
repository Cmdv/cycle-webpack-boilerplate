import test                 from 'tape';
import Rx                   from 'rx'
import createRenderTarget   from './helper/createRenderTarget';
import {makeHistoryDriver}  from '@cycle/history';
import {navbar}             from '../dialogue/navbar';
import {run}                from '@cycle/core';
import {filterLinks} from '@cycle/history'
import {getUrl, extractValue, events} from '../utils/utils'
import {h,makeDOMDriver}    from '@cycle/dom';

test('Navbar tests', function (t) {
  t.plan(3);

  function navComponent(responses) {
    let requests = navbar(responses); // give navBar some responses
    return requests
  }

  let {sources} = run(navComponent, { // Uncaught TypeError: drivers[_name2] is not a function!
    DOM: makeDOMDriver(createRenderTarget()),
    url$: Rx.Observable.just('/path'),
  })

  sources.DOM.select('.testlink').events('click').subscribe(ev => {
    console.dir(ev);
    // test event
    done() // finish the test
  })

  sources.DOM.select(':root').skip(1).take(1).subscribe(navbar => {
    // test navbar looks how you want
    t.equal(navbar.tagName, 'DIV') // etc
    let myElement = navbar.querySelector('.myelementclass')

    myElement.click() // non-standard only works in Chrome - sometimes
  })

  sources.url$.subscribe(url => {
    t.equal(url, '/path')
  })
});
