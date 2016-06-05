import {div, h1, h2, button, p} from '@cycle/dom'

const view = (newState$) =>
  // mapping over our merged model to update 'count'
  newState$
    .debug(x => console.log(x)) // nothing here!!
    .map(({counter}) =>
      div('.homepage', [
        h1('.content-subhead', ['Home Page']),
        h1([`Welcome to the Home Page`]),
        div('.pure-u-1-2 .counter-table', [
          button('.decrement .pure-button .button-error .pure-u-1-2', 'Decrement'),
          button('.increment .pure-button .button-success .pure-u-1-2', 'Increment'),
          div('.pure-u-1 .counter-table-result', [
            h2('Counter: ' + counter)
          ])
        ])
      ])
  )

export default view
