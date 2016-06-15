import dropRepeats from 'xstream/extra/dropRepeats'
import isolate from '@cycle/isolate'
import {div} from '@cycle/dom'
import {eqProps} from 'ramda'

import {requireSources, mergeFlatten} from '../../utils/utils'

const equalPaths = eqProps('path')
const loading = div('.loading', 'Loading...')

const callComponent = sources => ({path, value}) => {

  const component = value({...sources, router: sources.router.path(path)})
  return {
    ...component,
    DOM: component.DOM.startWith(loading)
  }
}

function ComponentRouter (sources) {
  requireSources('ComponentRouter', sources, 'routes$')

  const component$ = sources.routes$
    .map(routes => sources.router.define(routes)).flatten()
    .compose(dropRepeats(equalPaths))
    .map(callComponent(sources))
    .remember()

  return {
    pluck: key => mergeFlatten(key, [component$]),
    DOM: mergeFlatten('DOM', [component$]),
    route$: mergeFlatten('route$', [component$]),
    state$: mergeFlatten('state$', [component$]),
  }
}

export default sources => isolate(ComponentRouter)(sources)
