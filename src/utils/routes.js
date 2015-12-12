import latestObj    from 'rx-combine-latest-obj';
import Rx           from 'rx';
import R            from 'ramda';
import {div, h1, h} from '@cycle/dom';
import Home         from '../dialogue/pages/home/home-index';
import Page1        from '../dialogue/pages/page1/page1-index';
import Page2        from '../dialogue/pages/page2/page2-index';

function routes(sources) {
  const sharedState = Rx.Subject();

  const pageSources = R.merge({
    sharedState: sharedState
  }, sources);

  const routesUrls = {
    '/': Home(pageSources).DOM.shareReplay(1),
    '/page1': Page1(pageSources).DOM.shareReplay(1),
    '/page2': Page2(pageSources).DOM.shareReplay(1),
    '*': h1(`Page could not be found`),
  };

  const states$ = R.map( c => (c.CounterState)? c.CounterState : c, routesUrls);

  console.log(states$);

  //latestObj(states$).subscribe(pageSources); // must be a function not sure what this does
  //return R.map(c => c.DOM.shareReplay(1), routesUrls);

  return routesUrls
}


export default routes
