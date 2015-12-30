// homeIntent creates streams from click events on .increment & .decrement
const homeIntent = s => ({
    inc$: s.DOM.select('.increment').events('click').map(ev => +1),
    dec$: s.DOM.select('.decrement').events('click').map(ev => -1),
    props$: s.Props, // pass along current state of Props
  });
export default homeIntent
