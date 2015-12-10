
const homeIntent = DOM => ({
  inc$: DOM.select('.increment').events('click').map(ev => +1),
  dec$: DOM.select('.decrement').events('click').map(ev => -1),
})

export default homeIntent
