import test                 from 'tape'
import Rx                   from 'rx'
import Cycle                from '@cycle/core'
import {div, makeDOMDriver} from '@cycle/dom'
import {makeHistoryDriver}  from '@cycle/history';
import contentRouter        from '../component-router'
import createRenderTarget   from '__test_helper__/createRenderTarget'

const url = {
  home: {path: `/`},
  page2: {path: `/page2`}
};

const currPath = location.pathname;

test('CONTENT ROUTER TESTS #', function (t) {
  t.plan(4);

  const view = (content) => div('.routertest', [content]);

  function app(sources) {
    const Content = contentRouter(sources);
    const view$ = Rx.Observable.just(view(Content.DOM));

    return {
      DOM: view$,
      History: Rx.Observable.from([url.home]),
    }
  }

  let {sources} = Cycle.run(app, {
    DOM: makeDOMDriver(createRenderTarget()),
    History: makeHistoryDriver({hash: false, queries: true,}),
    // this is our counter Prop value of 2
    Props: () => Rx.Observable.just(2)
  });

  sources.DOM.select('.homepage').observable.skip(1).take(1).subscribe(function (element) {

    t.equal(Array.isArray(element), true, 'element is an array')
    t.equal(element[0].className, 'homepage', 'element has homepage class');

    const childrenElCounter = element[0].childNodes[2];

    t.equal(childrenElCounter.className, 'pure-u-1-2 counter-table', 'child element is counter table');

    const counterResults = childrenElCounter.childNodes[2].childNodes[0];
    const counterValue = counterResults.innerHTML.replace('Counter: ', '')

    t.equal(counterValue, '2', 'counter Prop value is 2 ');
    t.end()
  });
});
