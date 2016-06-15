import xs               from 'xstream';
import navbar           from './dialogue/components/navbar/navbar-index'
import ComponentRouter  from 'dialogue/components/component-router/component-router'

// importing the pages used for the routes
import Home             from 'dialogue/pages/home/home-index';
import Page1            from 'dialogue/pages/page1/page1-index';
import Page2            from 'dialogue/pages/page2/page2-index';
import Page404          from 'dialogue/pages/page404/page404-index';

// @cycle/dom has a hyperscript-helper built in so you can
// declare all html elements you are going to use like div, h1, h2, nav etc
import {div}            from '@cycle/dom'

// view is what we'd like to display in this case our sidebar + content all wrapped in a div
const view = (navbar, content) => {
  return div('#layout .pure-g', [
    div('.sidebar .pure-u-1 .pure-u-md-1-4', [div('.header', [navbar])]),
    div('.content .pure-u-1 .pure-u-md-3-4', [content])
  ])
};

// routes of our apps and where to go if particular url is visited
const routes = {
  '/': Home,
  '/page1': Page1,
  '/page2': Page2,
  '*': Page404,
}

// we need to pass our components to cycle and give them a "source" when they come from cycle
// creating this "cycle", here you can see that view$ is a Rx Observable containing out "view"
// we pass view our nav.DOM + Content.DOM which you can see in const view above become available
// variables. We return all of this in an Object with DOM + History
export default function main(sources) {

  const proxyState$ = xs.create()

  const page = ComponentRouter(
    {...sources,
    routes$: xs.of(routes),
    state$: proxyState$.startWith({counter: 0})
    }
  )

  proxyState$.imitate(page.state$)

  const Nav = navbar(sources);

  const view$ = xs.of(
    view(
      Nav.DOM,
      page.DOM
    )
  );

  return {
    DOM: view$,
    route$: page.routes$,
  }
};
