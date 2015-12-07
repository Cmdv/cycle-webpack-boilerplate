import Rx from 'rx'

const getUrl = event => event.target.href.replace(location.origin, ``);

const extractValue = (val, obs) => obs.map(obj => obj[val]); // return "/page1"


const events = (selector, _events) => {
  return Rx.Observable.merge(
    _events.map(event => selector.events(event))
  )
}

export {
  getUrl,
  extractValue,
  events,
}
