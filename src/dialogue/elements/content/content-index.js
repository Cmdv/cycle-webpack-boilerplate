import Rx         from 'rx';
import view       from './content-view'
import model      from './content-model'
import latestObj  from 'rx-combine-latest-obj';
import switchPath from 'switch-path';
import routes     from './routes';

const content = sources => {

  const state$ = model(sources);
  const view$ = view(state$);

  return {
    DOM: view$,
  };
};

export default content;
