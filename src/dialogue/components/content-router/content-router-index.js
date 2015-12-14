import switchPath from 'switch-path';
import Rx         from 'rx';
import Home       from '../../pages/home/home-index';
import Page1      from '../../pages/page1/page1-index';
import Page2      from '../../pages/page2/page2-index';
import Page404    from '../../pages/page404/page404-index';

//function HomePage(userId) {
//  const props$ = Observable.just({userId});
//  return (sources) => Home({...sources, props$});
//}

function ContentRouter(sources) {
  const sinks$ = sources.History.map(location => {
    const pathAndValue = switchPath(location.pathname, {
      '/': Home,
      '/page1': Page1,
      '/page2': Page2,
      '*': Page404,
    });
    const component = pathAndValue.value;
    const distinct  = Rx.Observable.just(component(sources)).distinct();
    console.log();
    return component(sources);
  }).shareReplay(1);

  return {
    DOM: sinks$.flatMapLatest(s => s.DOM),
    History: sinks$.flatMapLatest(s => s.link),
  };
}

export default ContentRouter;

//component(sources).CounterState.subscribe(x => console.log(x));
//component(sources).CounterState.delay(1000).subscribe(x => console.log(x));
