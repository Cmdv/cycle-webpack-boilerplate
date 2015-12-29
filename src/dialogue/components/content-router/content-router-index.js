import switchPath from 'switch-path';
import Rx         from 'rx';
import isolate    from '@cycle/isolate';
import Home       from '../../pages/home/home-index';
import Page1      from '../../pages/page1/page1-index';
import Page2      from '../../pages/page2/page2-index';
import Page404    from '../../pages/page404/page404-index';

function ContentRouter(sources) {
  const sinks$ = sources.History.map(location => {
    const pathAndValue = switchPath(location.pathname, {
      '/': Home,
      '/page1': Page1,
      '/page2': Page2,
      '*': Page404,
    });
    const component = pathAndValue.value;
    const Component = isolate(component);
    // cold observable
    Component(sources).Props.subscribe(x => console.log(x));
    setTimeout(function () {
      Component(sources).Props.subscribe(x => console.log(x));
    }, 2000);

    return Component(sources);
  });

  return {
    DOM: sinks$.flatMapLatest(s => s.DOM),
    History: sinks$.flatMapLatest(s => s.link),
  };
}

export default ContentRouter;


