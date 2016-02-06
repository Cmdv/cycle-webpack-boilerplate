import Rx from 'rx';
// merging our clicks from our intent
// (a,b) -> num
const homeModel = ({inc$,dec$, state$}) => {
  return Rx.Observable.merge(
    state$.take(1).map(({counter}) => parseFloat(counter)),
    inc$,
    dec$
    )
    .scan((x, y) =>  x + y)
    .map(x => ({counter: x}))
}

export default homeModel;
