import {
  createHistory,
  createHashHistory,
  useQueries,
  useBasename,
} from 'history'

function supportsHistory() {
  const ua = navigator.userAgent

  if ((ua.indexOf(`Android 2.`) !== -1 ||
      ua.indexOf(`Android 4.0`) !== -1) &&
      ua.indexOf(`Mobile Safari`) !== -1 &&
      ua.indexOf(`Chrome`) === -1 &&
      ua.indexOf(`Windows Phone`) === -1)
  {
    {return false }
  }

   // Return the regular check
  return window.history && `pushState` in window.history
}

function makeHistory(hash, options) {
  const useHash = hash || !supportsHistory()
  return useHash ?
    useQueries(useBasename(createHashHistory))(options) :
    useQueries(useBasename(createHistory))(options)
}

function makePushState(history) {
  return function pushState(url) {
    if (`string` === typeof url || `object` === typeof url) {
      history.push(url)
    } else {
      throw new Error(`Router Driver input must be a string or
        object but received ${typeof url}`)
    }
  }
}

export {makeHistory, makePushState}
