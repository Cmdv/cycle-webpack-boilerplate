import test               from 'tape'
import {Observable}       from 'rx'
import {mockDOMSource,
  div,
  makeDOMDriver}    from '@cycle/dom'
import Cycle              from '@cycle/core'
import intent             from '../home-intent'
import model              from '../home-model'
import view               from '../home-view'
import mockClickEvent     from './mockClickEvent'
import createRenderTarget from '../../../../__test__/helper/createRenderTarget'

//const userEvents = mockDOMSource({
//  '.foo': {
//    'click': Rx.Observable.just({inc$:1}),
//  }
//});
//
//// Usage
//const click$ = userEvents.select('.foo').events('click');
//
//click$.subscribe(x => console.dir(x.inc$))
//
//
//const Home = (sources) => {
//  const props$ = sources.Props;
//  const actions = intent(sources);
//
//  const state$ = model({...actions, props$});
//
//  actions.inc$.subscribe(x => console.dir(x))
//
//  return {
//    DOM: view(state$),
//    Props: state$,
//  }
//};
//
//let {sources} = Cycle.run(Home, {
//  DOM: makeDOMDriver(createRenderTarget()),
//  // this is our counter Prop value of 4
//  Props: () => Rx.Observable.just(0)
//});




test('HOME TESTS #', function (t) {

  t.test('click event', function (q) {
    q.plan(2);


    const props$ = Rx.Observable.just(4).delay(50);
    const dec$ = Rx.Observable.just(7).delay(100);
    const inc$ = Rx.Observable.just(1).delay(150);

    model({inc$, dec$, props$}).skip(2).subscribe( results =>
      q.equal(results, 12, 'make this equal')
    );


    //const mockedDOM = mockDOMSource({
    //  '.link': {
    //    'click': Observable.fromArray([mockClickEvent({href: '/test-url'})])
    //  }
    //});

    //const actions = intent({DOM: mockedDOM});
    //actions.click$.subscribe(x =>
    //  q.equal(x.target.href, `http://localhost${port}/test-url`,
    //    'Intent will check click event\'s href and return a filtered url')
    //);
  });
});
