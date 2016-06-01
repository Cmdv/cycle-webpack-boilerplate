import view   from './home-view'
import intent from './home-intent'
import model  from './home-model'


// returning our DOM
const Home = (sources) => {

  const {state$} = sources;

  const actions  = intent(sources);
  const newState$  = model({...actions, state$});

  return {
    DOM: view(newState$),
    state$: newState$,
  }
};

export default Home
