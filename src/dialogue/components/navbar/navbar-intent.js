import {getUrl, extractValue, events}   from '../../utils/utils'

// Our navbar need some intent, our intent looks out for clicks on elements with the class of .link
// and once we get one we map it through our History driver
const intent = ({DOM}) => ({
  click$: events(
    DOM.select('.link a'), [
      `click`,
      `touchstart`,
    ])
});

export default intent;
