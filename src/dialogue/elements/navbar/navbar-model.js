import latestObj      from 'rx-combine-latest-obj'

const model = ({click$}) => {
  return latestObj({
    url: click$
      .map(event => event.target.href.replace(location.origin, ``))
  }).startWith()
};

export default model;
