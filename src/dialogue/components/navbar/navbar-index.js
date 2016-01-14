import {extractValue} from '../../utils/utils'
import intent         from './navbar-intent'
import model          from './navbar-model'
import view           from './navbar-view'

const navbar = (sources) => {

  const actions = intent(sources);
  const state$ = model({actions});
  const view$ = Rx.Observable.just(view());
  return {
    DOM: view$,
    url$: state$.pluck('url'),
  }
};

export default navbar;
