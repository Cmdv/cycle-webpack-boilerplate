import Rx from 'rx';
// merging our clicks from our intent
// (a,b) -> num
const homeModel = ({actions, props$}) =>
  Rx.Observable.merge(
    props$.take(1).map(({counter}) => parseFloat(counter)),
    actions.inc$,
    actions.dec$,
  ).scan((x, y) => x + y).shareReplay(1)
export default homeModel;
