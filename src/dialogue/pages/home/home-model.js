import Rx from 'rx';
// merging our clicks from our intent
// (a,b) -> num
const homeModel = ({inc$,dec$}, props$) => {
  return Rx.Observable.merge(
    props$.map(({counter}) => parseFloat(counter)).take(1),
    inc$,
    dec$
    )
    .scan((x, y) =>  x + y)
    .do(x => console.log(x))
    .map(x => {
      console.log('Model Exit: ', x);
      return {counter: x}
    })

}

export default homeModel;
