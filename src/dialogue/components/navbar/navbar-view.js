import {h, div, ul, li, a, nav, h1, h2} from '@cycle/dom'

const pname = location.pathname == '/' ? '': location.pathname;

const view = () => {

  console.log(`${pname}/`);

  return div([
    h1('.brand-title', [`An APP`]),
    h2('.brand-tagline', [`Showcasing Cycle.js`]),
    nav('.nav', [
      ul('.nav-list', [
        li('.nav-item .link', [
          a('.pure-button', {href: `${pname}/`}, [`Home`])
        ]),
        li('.nav-item .link', [
          a('.pure-button', {href: `${pname}/page1`}, [`Page 1`])
        ]),
        li('.nav-item .link .testlink', [
          a('.pure-button', {href: `${pname}/page2`}, [`Page 2`])
        ])
      ])
    ])])
};

export default view;
