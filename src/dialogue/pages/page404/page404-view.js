import {h, div, h1,} from '@cycle/dom'

const view = () => {
  return div([
    h1('.content-subhead',['404 error']),
    h1(`Page could not be found`)
  ])
};

export default view
