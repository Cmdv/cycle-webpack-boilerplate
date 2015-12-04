import test                 from 'tape';
import Rx                   from 'rx'
import createRenderTarget   from './helper/createRenderTarget';
import {makeHistoryDriver}  from '@cycle/history';
import Navbar               from '../dialogue/navbar';
import Cycle                from '@cycle/core';
import {filterLinks} from '@cycle/history'
import {getUrl, extractValue, events} from '../utils/utils'
import {h,makeDOMDriver,mockDOMResponse} from '@cycle/dom';

test('Navbar tests', function(t) {
  t.plan(3);

  const intent = ({DOM}) => ({
    click$: events(
      DOM.select('.link'), [
        `click`,
        `touchstart`,
      ])
      .filter(filterLinks),
  })

  const model = ({click$}, {History}) => {
    return latestObj({
      url: click$
        .map(getUrl)
        .startWith(History.value.pathname),
    })
  }

  // mock the Main component and pass it the responses
  function mainComponent(responses) {
    let requests = Navbar(responses)
    return requests
  }

  const actions = intent(responses)
  const state$ = model(actions, responses)

  // Pass Main through our RenderTarget
  let {sinks, sources} = Cycle.run(mainComponent, {
    DOM: makeDOMDriver(createRenderTarget()),
    url$: extractValue(`url`, state$)
  });

  // Uncaught TypeError: drivers[_name2] is not a function

  sources.DOM.select('.myelementclass').events('click').subscribe(ev => {
    console.dir(ev.type)
    t.equal(ev.type, 'click');
  });
});
