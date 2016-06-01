import xs from 'xstream';
// merging our clicks from our intent
// (a,b) -> num
const homeModel = ({inc$,dec$, state$}) => {
  return xs.merge(
    state$.take(1).map((x) => parseFloat(x.counter)),
    inc$,
    dec$
    )
    .fold((x, y) => x + y, 0)
    .map(x => ({counter: x}))
}

export default homeModel;
