import {h, div, ul, li, a, nav, h1, h2} from '@cycle/dom'

function view (sources, path$) {

  const {router: {createHref}} = sources;

  const homeHref = createHref('/')
  const page1Href = createHref('/page1')
  const page2tHref = createHref('/page2')

  return path$.map(() => {

    return div([
      h1('.brand-title', [`An APP`]),
      h2('.brand-tagline', [`Showcasing Cycle.js`]),
      nav('.nav', [
        ul('.nav-list', [
          li('.nav-item .link', [
            a('.pure-button', {href: homeHref}, [`Home`])
          ]),
          li('.nav-item .link', [
            a('.pure-button', {href: page1Href}, [`Page 1`])
          ]),
          li('.nav-item .link .testlink', [
            a('.pure-button', {href: page2tHref}, [`Page 2`])
          ])
        ])
      ])])

  });
};

export default view;
