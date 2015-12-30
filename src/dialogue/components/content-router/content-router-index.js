import switchPath from 'switch-path';
import Rx         from 'rx';
import isolate    from '@cycle/isolate';
import Home       from '../../pages/home/home-index';
import Page1      from '../../pages/page1/page1-index';
import Page2      from '../../pages/page2/page2-index';
import Page404    from '../../pages/page404/page404-index';

function ContentRouter(sources) {
  const sinks$ = sources.History.map(location => {
    // use switchpath to marry up our current url with component
    const pathAndValue = switchPath(location.pathname, {
      '/': Home,
      '/page1': Page1,
      '/page2': Page2,
      '*': Page404,
    });

    // the result from the switchpath
    const component = pathAndValue.value;
    // isolate the component will help if using templates
    const Component = isolate(component);
    const Component$ = Component(sources);

    // check if the page/component has a Props value and if so pass it on
    const Props$ = () => Component$.Props ? sources.Props = Component$.Props.shareReplay(1): null;

    return {
      Comp: Component$,
      Props: Props$() // return our Props$ to current page
    };

  }).shareReplay(1); // make sure sinks$ are hot


  return {
    DOM: sinks$.flatMapLatest(s => s.Comp.DOM),
    History: sinks$.flatMapLatest(s => s.Comp.link),
    Props: sinks$.flatMapLatest(s => {
      // be good not to have to subscribe to it!
      const Props = s.Props.subscribe(x => x);
      return Rx.Observable.just(Props);
    })
  };
}

export default ContentRouter;


