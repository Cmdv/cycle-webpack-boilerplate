import test                 from 'tape'
import Rx                   from 'rx'
import Cycle                from '@cycle/core'
import {div, makeDOMDriver} from '@cycle/dom'
import {makeHistoryDriver}  from '@cycle/history';
import page1                from '../page1-index'
import createRenderTarget   from '../../../../__test__/helper/createRenderTarget'


test('PAGE 1 TESTS #', function (t) {
  t.plan(4);

  const view = (content) => div('.page1test', [content]);

  function app(sources) {
    const Page1 = page1(sources);
    const view$ = Rx.Observable.just(view(Page1.DOM));

    return {
      DOM: view$,
    }
  }

  let {sources} = Cycle.run(app, {
    DOM: makeDOMDriver(createRenderTarget()),
    // this is our counter Prop value of 4
    Props: () => Rx.Observable.just(4)
  });

  sources.DOM.select('.page1').observable.skip(1).take(1).subscribe(function (element) {

    t.equal(Array.isArray(element), true, 'element is an array');
    t.equal(element[0].className, 'page1', 'element has page1test class');

    const childrenElCounter = element[0].childNodes[2];
    const counterValue = childrenElCounter.innerHTML.replace('Counter: ', '');

    t.equal(counterValue, '4', 'counter Prop value is 4 ');

  });
});
