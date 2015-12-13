import view   from './home-view'
import intent from './home-intent'
import model  from './home-model'
import Rx     from 'rx';


// returning our DOM
const Home = (sources) => {
  const actions = intent(sources);
  const state$ = model(actions);

  return {
    DOM: view(state$),
    CounterState: state$,
  }
};

export default Home
