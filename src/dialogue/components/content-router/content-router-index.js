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
    
    // tried isolating
    const Component = isolate(component);

    // when this hit's Home again everything is reset to 0
    // but if you browse between page 1 & 2 the state keeps
    const Component$ = Component(sources);

    // Here I grab the current Props if available
    const Props$ = () => Component$.Props ? sources.Props = Component$.Props.shareReplay(1): null;


    return {
      Comp: Component$,
      Props: Props$()
    };

  }).shareReplay(1); // make sure sinks$ are hot

  return {
    DOM: sinks$.flatMapLatest(s => s.Comp.DOM),
    History: sinks$.flatMapLatest(s => s.Comp.link),
    Props: sinks$.flatMapLatest(s => {
      // just testing to see that data is coming into router from Props
      s.Props.subscribe(x => console.log('Router: ' + x));
      return s.Props
    })
  };
}

export default ContentRouter;


