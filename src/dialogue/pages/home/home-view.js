import {h, div, h1, button, p} from '@cycle/dom'

const view = (state$) => {
  state$.map(count =>
  div([
    h1('.content-subhead',['Home Page']),
    h1([`Welcome to the Home Page`]),
    div([
      button('.decrement', 'Decrement'),
      button('.increment', 'Increment'),
      p('Counter: ' + count),
    ])
  ])
  )
};

export default view
