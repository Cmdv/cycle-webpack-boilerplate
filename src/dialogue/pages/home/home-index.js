import {Observable}     from 'rx'
import view   from './home-view'
import intent from './home-intent'
import model  from './home-model'

// returning our DOM
const Home = (sources) => {
  const {state$} = sources;
  const actions  = intent(sources);
  const state$$  = model({...actions,state$});

  return {
    DOM: view(state$$),
    state$: state$$,
  }
};

export default Home
