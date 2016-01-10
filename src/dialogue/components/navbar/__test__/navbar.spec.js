import test             from 'tape'
import {Observable}     from 'rx'
import {mockDOMSource}  from '@cycle/dom'
import navbarIntent     from '../navbar-intent'
import navbarModel      from '../navbar-model'
import mockClickEvent   from './mockClickEvent'

// get location port
const port = ':' + location.port;

test('NAVBAR TESTS #', function (t) {

  t.test('click event', function (q) {
    q.plan(2);

    const mockedDOM = mockDOMSource({
      '.link': {
        'click': Observable.fromArray([mockClickEvent({href: '/test-url' })])
      }
    });

    const actions = navbarIntent({DOM: mockedDOM});
    actions.click$.subscribe(x =>
      q.equal(x.target.href, `http://localhost${port}/test-url`,
        'Intent will check click event\'s href and return a filtered url')
    );

    const state$ = navbarModel({actions});
    state$.subscribe(x => q.equal(x.url, '/test-url',
      'Model strips out protocol, origin and port')
    );
  });

  t.test('touchstart event', function (q) {
    q.plan(2);

    const mockedDOM = mockDOMSource({
      '.link': {
        'touchstart': Observable.fromArray([mockClickEvent({href: '/page1' })])
      }
    });

    const actions = navbarIntent({DOM: mockedDOM});
    actions.click$.subscribe(x =>
      q.equal(x.target.href, `http://localhost${port}/page1`,
        'Intent will check touchstart event\'s href and return a filtered url')
    );

    const state$ = navbarModel({actions});
    state$.subscribe(x => q.equal(x.url, '/page1',
      'Model strips out protocol, origin and port')
    );
  });

  t.end();
});
