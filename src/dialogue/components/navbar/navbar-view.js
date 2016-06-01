import {h, div, ul, li, a, nav, h1, h2} from '@cycle/dom'
import xs from 'xstream'
function view (sources) {

  const {router} = sources;

  const homeHref = router.createHref('/')
  const page1Href = router.createHref('/page1')
  const page2tHref = router.createHref('/page2')


  return xs.of(
    div([
      h1('.brand-title', [`An APP`]),
      h2('.brand-tagline', [`Showcasing Cycle.js`]),
      nav('.nav', [
        ul('.nav-list', [
          li('.nav-item .link', [
            a('.pure-button', {props: {href: homeHref}}, [`Home`])
          ]),
          li('.nav-item .link', [
            a('.pure-button', {props: {href: page1Href}}, [`Page 1`])
          ]),
          li('.nav-item .link .testlink', [
            a('.pure-button', {props: {href: page2tHref}}, [`Page 2`])
          ])
        ])
    ])])
  )
};

export default view;
