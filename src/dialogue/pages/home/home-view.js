import {h, div, h1,} from '@cycle/dom'

const view = () => {
  return div([
    h1('.content-subhead',['Home Page']),
    h1([`Welcome to the Home Page`])
  ])
}

export default view
