import Rx from 'rx'
import view from './home-view'
import intent from './home-intent'
import model from './home-model'

const Home = (sources) => {
  console.log(sources.DOM)
  const actions = intent(sources.DOM)
  const state$ = model(actions)

  return {
    DOM: view(state$)
  }
}

export default Home
export {Home}
