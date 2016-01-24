import Rx from 'rx';
// merging our clicks from our intent
// (a,b) -> num
const homeModel = ({inc$,dec$, props$}) => {
  return Rx.Observable.merge(
    props$.map(({counter}) => {
      console.log('Model: ', counter);
      return parseFloat(counter)
    }),
    inc$,
    dec$
    )
    .scan((x, y) =>  x + y)
    .map(x => {
      console.log('Model Exit: ', x);
      return {counter: x}
    })

}

export default homeModel;
