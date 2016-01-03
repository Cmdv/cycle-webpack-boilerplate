import {h, div, h1, h2} from '@cycle/dom'

const view = props$ => {
  return props$.map(x => {
    return div('.page1',[
      h1('.content-subhead', ['Page 1']),
      h1([`This is Page 1`]),
      h2(['Counter: ' + x])
    ])
  });
}

export default view;
