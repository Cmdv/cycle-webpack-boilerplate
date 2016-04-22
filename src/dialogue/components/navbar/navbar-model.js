import latestObj from 'rx-combine-latest-obj'

const model = ({actions}) => {
  return latestObj({
    url: actions.click$
      .map(event => {
        event.preventDefault();
        return event.target.href.replace(location.origin, ``);
      }),
  }).startWith()

};

export default model;
