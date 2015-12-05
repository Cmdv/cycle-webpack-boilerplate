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

  t.plan(1);

  function navComponent(responses) {
    let requests = navbar(responses);
    return requests
  }

  const source = {
    DOM: makeDOMDriver(createRenderTarget()),
    History: makeHistoryDriver({
      hash: false,
      queries: true,
    }),
    url$: () => Rx.Observable.just('/')
  };

  let {sources} = run(navComponent, source );

  sources.url$.subscribe(url => {
    t.equal(url, '/', 'the url should equal what was put through')
  });

  console.dir(sources.DOM);

  //sources.DOM.select(':root').skip(1).take(1).subscribe(navbar => { // not a function!!
  //  t.equal(navbar.tagName, 'DIV');
  //})

  //sources.DOM.select('.testlink').events('click').subscribe(ev => { // not a function!!
  //  console.dir(ev);
  //});
});
