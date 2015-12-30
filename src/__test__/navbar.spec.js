import test                 from 'tape';
import Rx                   from 'rx'
import createRenderTarget   from './helper/createRenderTarget';
import {makeHistoryDriver}  from '@cycle/history';
import navbar               from '../dialogue/components/navbar/navbar-index';
import {run}                from '@cycle/core';
import {filterLinks} from '@cycle/history'
import {getUrl, extractValue, events} from '../dialogue/utils/utils'
import {h,makeDOMDriver,mockDOMSource}    from '@cycle/dom';

test('Navbar tests', function (t) {

  t.plan(1);

  //function navComponent(sources) {
  //  let requests = navbar(sources);
  //  return requests
  //}
  //
  //const source = {
  //  DOM: makeDOMDriver(createRenderTarget()),
  //  History: makeHistoryDriver({
  //    hash: false,
  //    queries: true,
  //  }),
  //  url$: () => Rx.Observable.just('/')
  //};
  //
  //let {sources} = run(navComponent, source );
  //
  //sources.url$.subscribe(url => {
  //  t.equal(url, '/', 'the url should equal what was put through')
  //});
  //
  //console.dir(sources.url$);
  //
  //sources.DOM.select(':root').skip(1).take(1).subscribe(navbar => { // not a function!!
  //  t.equal(navbar.tagName, 'DIV');
  //})
  //
  //sources.DOM.select('.testlink').events('click').subscribe(ev => { // not a function!!
  //  console.dir(ev);
  //});
});


//import test                 from 'tape';
//import Rx                   from 'rx'
//import createRenderTarget   from './helper/createRenderTarget';
//import {makeHistoryDriver}  from '@cycle/history';
//import navbar               from '../dialogue/navbar';
//import {run}                from '@cycle/core';
//import {filterLinks} from '@cycle/history'
//import {getUrl, extractValue, events} from '../utils/utils'
//import {h,makeDOMDriver,mockDOMSource}    from '@cycle/dom';
//
//test('Navbar tests', function (t) {
//
//  t.plan(1);
//
//  let History = makeHistoryDriver({
//    hash: false,
//    queries: true,
//  })
//
//  let DOM = mockDOMSource({
//    '.link': {
//      'click': Rx.Observable.just({target: {href: location.origin + '/' + 'page1'}})
//    }
//  })
//
//
//  History.value = {pathname: '/'}
//
//  // set up the sources, mocking the input
//  const sources = {
//    DOM: DOM,
//    //History: () => Rx.Observable.just({pathname: '/page1'})
//  };
//
//  //DOM.select('.link').events('click').subscribe((url) => {
//  //
//  //  //console.dir(url);
//  //  //console.dir.bind(console)
//  //})
//
//  // get the output and assert something with sinks.DOM
//  let sinks = navbar(sources);
//
//  let poo = sinks.url$.subscribe(x => x);
//
//  console.dir(poo);
//
//  sinks.url$.subscribe(url => {
//    t.equal(url, 'page1', 'the url returned should be page1')
//  })
//
//});
