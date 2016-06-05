import homeView   from './home-view'
import homeIntent from './home-intent'
import homeModel  from './home-model'


// returning our DOM
const Home = (sources) => {

  const {state$} = sources;

  const actions  = homeIntent(sources);
  const newState$  = homeModel({...actions, state$});

  return {
    DOM: homeView(newState$),
    state$: newState$,
  }
};

export default Home
