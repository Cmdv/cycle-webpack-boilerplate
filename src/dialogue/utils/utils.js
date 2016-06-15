import xs from 'xstream'
import {forEach, map, propOr} from 'ramda'

export function requireSources (componentName, sources, ...sourcesNames) {
  forEach(n => {
    if (!sources[n]) {
      throw new Error(`${componentName} must have ${n} specified`)
    }
  }, sourcesNames)
}

export function isStream (stream) {
  return typeof stream.addListener === 'function' &&
    typeof stream.fold === 'function'
}

const propOrNever = propOr(xs.never())
export function mergeFlatten (key, children) {
  const streams = map(child => isStream(child)
      ? child.map(propOrNever(key)).flatten()
      : propOrNever(key, child)
    , children
  )
  return xs.merge(...streams)
}
