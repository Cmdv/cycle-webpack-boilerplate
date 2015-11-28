import {h, div, ul, li, a, nav, h1, h2} from '@cycle/dom'
import latestObj from 'rx-combine-latest-obj'
import {filterLinks} from '@cycle/history'
import {getUrl, extractValue, events} from '../utils/utils'

// Our navbar need some intent, our intent looks out for clicks on elements with the class of .link
// and once we get one we filter it through our History driver
const intent = ({DOM}) => ({
  click$: events(
    DOM.select('.link'), [
      `click`,
      `touchstart`,
    ])
    .filter(filterLinks),
})

const model = ({click$}, {History}) => {
  return latestObj({
    url: click$
      .map(getUrl)
      .startWith(History.value.pathname),
  })
}

const view = () => {
  return div([
    h1('.brand-title', [`An APP`]),
    h2('.brand-tagline', [`Showcasing Cycle.js`]),
    nav('.nav', [
      ul('.nav-list', [
        li('.nav-item .link', [
          a('.pure-button', {href: `/`}, [`Home`])
        ]),
        li('.nav-item .link', [
          a('.pure-button', {href: `/page1`}, [`Page 1`])
        ]),
        li('.nav-item .link', [
          a('.pure-button', {href: `/page2`}, [`Page 2`])
        ])
      ])
    ])])
}

const navbar = (responses) => {
  const actions = intent(responses)
  const state$ = model(actions, responses)
  const view$ = view()

  return {
    DOM: view$,
    url$: extractValue(`url`, state$),
  }
}

export default navbar
export {navbar}
