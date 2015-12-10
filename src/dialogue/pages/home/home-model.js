const homeModel = actions =>
  Cycle.Rx.Observable.merge(
    actions.inc$,
    actions.dec$,
  ).startWith(0).scan((x, y) => x + y);

export default homeModel;
