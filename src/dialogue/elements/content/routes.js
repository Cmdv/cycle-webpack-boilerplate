import latestObj    from 'rx-combine-latest-obj';
import Rx           from 'rx';
import R            from 'ramda';
import {div, h1, h} from '@cycle/dom';
import Home         from '../../pages/home/home-index';
import Page1        from '../../pages/page1/page1-index';
import Page2        from '../../pages/page2/page2-index';

function routes(sources) {
  const sharedState = Rx.Subject();

  const pageSources = R.merge({
    sharedState: sharedState
  }, sources);

  const home = Home(pageSources);
  const page1 = Page1(pageSources);
  const page2 = Page2(pageSources);

  const routesUrls = {
    '/': home.DOM.shareReplay(1),
    '/page1': page1.DOM.shareReplay(1),
    '/page2': page2.DOM.shareReplay(1),
    '*': h1(`Page could not be found`),
  };

  return {
    routesUrls,
    home,
    page1,
    page2
  }
}

export default routes
