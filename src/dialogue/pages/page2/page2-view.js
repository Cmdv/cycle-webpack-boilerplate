import {h, div, h1, h2} from '@cycle/dom'

const view = state$ => {
  return state$.map(({counter}) => {
    return div('.page2', [
      h1('.content-subhead', ['Page 2']),
      h1([`This is the second Page`]),
      h2(['Counter: ' + counter])
    ])
  });
};

export default view
