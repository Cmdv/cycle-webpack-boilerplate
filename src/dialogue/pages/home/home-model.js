import Rx from 'rx';
// merging our clicks from our intent
// (a,b) -> num
const homeModel = ({inc$,dec$, props$}) => {
  return Rx.Observable.merge(
    props$.take(1).map((counter) => parseFloat(counter)),
    inc$,
    dec$
    )
    .scan((x, y) =>  x + y)
    .shareReplay(1);
}

export default homeModel;
