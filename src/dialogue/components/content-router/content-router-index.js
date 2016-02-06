import Home       from '../../pages/home/home-index';
import Page1      from '../../pages/page1/page1-index';
import Page2      from '../../pages/page2/page2-index';
import Page404    from '../../pages/page404/page404-index';

const routes = {
  '/': Home,
  '/page1': Page1,
  '/page2': Page2,
  '*': Page404
};

function ContentRouter(sources) {
  const {router, state$} = sources;
  const {path$, value$} = router.define(routes);

  const childrenDOM$ = path$.zip(value$,
    (path, value) => {
      const comp = value({...sources, router: router.path(path), state$: state$.take(1)})
      return {
        DOM: comp.DOM,
        state$: comp.state$
      }
    }
  )

  return {
    DOM: childrenDOM$.flatMapLatest(s => s.DOM),
    state$: childrenDOM$.flatMapLatest(s => s.state$),
    path$: path$
  };
}

export default ContentRouter;
