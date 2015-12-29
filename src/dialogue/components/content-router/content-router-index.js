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
    const Component$ = Component(sources);
    // this is the fix so far
    const Props$ = () => Component$.Props ? sources.Props = Component$.Props.shareReplay(1): null;

    return {
      Comp: Component(sources),
      Props: Props$()
    };
  }).shareReplay(1);

  return {
    DOM: sinks$.flatMapLatest(s => s.Comp.DOM),
    History: sinks$.flatMapLatest(s => s.Comp.link),
    Props: sinks$.flatMap(s => {
      s.Props.subscribe(x => console.log('Router: ' + x));
      return s.Props
    })
  };
}

export default ContentRouter;


