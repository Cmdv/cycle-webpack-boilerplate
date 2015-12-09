import {h, div, h1,} from '@cycle/dom'

const view = () => {
  return div([
    h1('.content-subhead',['Page 1']),
    h1([`This is Page 1`])
  ])
};

export default view;
