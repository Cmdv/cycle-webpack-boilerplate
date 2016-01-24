import view   from './home-view'
import intent from './home-intent'
import model  from './home-model'

// returning our DOM
const Home = (sources, props$) => {

  const actions = intent(sources);
  const state$ = model({...actions, props$})

  return {
    DOM: view(state$),
    props$: state$,
  }
};

export default Home
