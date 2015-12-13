import switchPath from 'switch-path';
import Home       from '../../pages/home/home-index';
import Page1      from '../../pages/page1/page1-index';
import Page2      from '../../pages/page2/page2-index';
import Page404    from '../../pages/page404/page404-index';

//function HomePage(userId) {
//  const props$ = Observable.just({userId});
//  return (sources) => Home({...sources, props$});
//}

function Content(sources) {
  const sinks$ = sources.History.map(location => {
    const pathAndValue = switchPath(location.pathname, {
      '/': Home,
      '/page1': Page1,
      '/page2': Page2,
      '*': Page404,
    });
    const component = pathAndValue.value;

    component(sources).CounterState.subscribe(x => console.log(x));

    return component(sources);
  }).shareReplay(1);

  return {
    DOM: sinks$.flatMapLatest(s => s.DOM),
    History: sinks$.flatMapLatest(s => s.link),
  };
}

export default Content;
