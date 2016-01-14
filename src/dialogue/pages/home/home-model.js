import Rx from 'rx';
// merging our clicks from our intent
// (a,b) -> num
const homeModel = ({inc$,dec$, props$}) => {
  return Rx.Observable.merge(
    props$.map(({counter}) => parseFloat(counter)),
    inc$,
    dec$
    )
    .scan((x, y) =>  x + y, 0)
    .shareReplay(1)
    .map(x => ({counter: x}))
}

export default homeModel;
