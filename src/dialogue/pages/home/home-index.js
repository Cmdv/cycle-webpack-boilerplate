import Rx from 'rx'
import view from './home-view'
import intent from './home-intent'
import model from './home-model'

const Home = (responses) => {

  const actions = intent(responses.DOM)
  const state$ = model(actions)

  return {
    DOM: view(state$)
  }
}

export default Home
export {Home}
