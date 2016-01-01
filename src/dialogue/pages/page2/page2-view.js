import {h, div, h1, h2} from '@cycle/dom'

const view = props$ => {
  return props$.map(x => {
    return div('.page2', [
      h1('.content-subhead', ['Page 2']),
      h1([`This is the second Page`]),
      h2(['Counter : ' + x])
    ])
  });
};

export default view
