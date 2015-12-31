import view   from './home-view'
import intent from './home-intent'
import model  from './home-model'

// returning our DOM
const Home = (sources) => {
  const props$ = sources.History
    .map(({state}) => state ? state: {counter: 0})
    
  const actions = intent(sources);
  const state$ = model({actions,props$});

  return {
    DOM: view(state$),
    Props: state$.map(count => {
      return {counter: count}
    }),
  }
};

export default Home
