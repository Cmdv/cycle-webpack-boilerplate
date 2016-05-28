import xs, {Stream} from 'xstream'
import {forEach, map, propOr} from 'ramda'

export function requireSources (componentName, sources, ...sourcesNames) {
  forEach(n => {
    if (!sources[n]) {
      throw new Error(`${componentName} must have ${n} specified`)
    }
  }, sourcesNames)
}

export function isStream (stream) {
  return stream instanceof Stream
}

const propOrNever = propOr(xs.never())

export function mergeFlatten (key, children) {
  return xs.merge(
    ...map(child => isStream(child)
        ? child.map(propOrNever(key)).flatten()
        : propOrNever(key, child)
      , children
    )
  )
}
