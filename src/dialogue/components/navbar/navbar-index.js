import view from './navbar-view'

const navbar = (sources) => {

  const view$ = view(sources);
  return {
    DOM: view$,
  }
};

export default navbar;
