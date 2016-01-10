import {filterLinks}  from '@cycle/history'
import {getUrl, extractValue, events}   from '../../utils/utils'

// Our navbar need some intent, our intent looks out for clicks on elements with the class of .link
// and once we get one we filter it through our History driver
const intent = ({DOM}) => ({
  click$: events(
    DOM.select('.link a'), [
      `click`,
      `touchstart`,
    ])
    .filter(filterLinks)
});

export default intent;
