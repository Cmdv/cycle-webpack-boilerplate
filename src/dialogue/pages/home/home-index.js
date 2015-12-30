import view   from './home-view'
import intent from './home-intent'
import model  from './home-model'

// returning our DOM
const Home = (sources) => {
  const props$ = sources.Props;
  const actions = intent(sources);
  const state$ = model({actions,props$});

  return {
    DOM: view(state$),
    Props: state$,
  }
};

export default Home
