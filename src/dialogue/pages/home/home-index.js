import view   from './home-view'
import intent from './home-intent'
import model  from './home-model'

// returning our DOM
const Home = (sources) => {
  const actions = intent(sources);
  const state$ = model(actions);

  state$.subscribe(x => console.log('HOME: ', x));

  return {
    DOM: view(state$),
    Props: state$,
  }
};

export default Home
