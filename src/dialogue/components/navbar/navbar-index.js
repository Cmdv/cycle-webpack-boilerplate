import view from './navbar-view'

const navbar = (sources, path$) => {

  const view$ = view(sources, path$);
  return {
    DOM: view$,
  }
};

export default navbar;
