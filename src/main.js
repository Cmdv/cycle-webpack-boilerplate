import Rx             from 'rx'
import navbar         from './dialogue/components/navbar/navbar-index'
import content  from './dialogue/components/content-router/content-router-index'
// @cycle/dom has a hyperscript-helper built in so you can
// declare all html elements you are going to use like div, h1, h2, nav etc
import {div}    from '@cycle/dom'

// view is what we'd like to display in this case our sidebar + content all wrapped in a div
const view = (navbar, content) => {
  return div('#layout .pure-g', [
    div('.sidebar .pure-u-1 .pure-u-md-1-4', div('.header', [navbar])),
    div('.content .pure-u-1 .pure-u-md-3-4', [content])
  ])
};
// we need to pass our components to cycle and give them a "source" when they come from cycle
// creating this "cycle", here you can see that view$ is a Rx Observable containing out "view"
// we pass view our nav.DOM + Content.DOM which you can see in const view above become available
// variables. We return all of this in an Object with DOM + History

const main = (routes$, sources) => {
  //routes$.props$.subsribe(x => console.log('Main', x))

  const Content = content(routes$, sources);
  const Nav = navbar(sources);
  const props$ = Content.props$;

  const view$ = Rx.Observable.just(
    view(
      Nav.DOM,
      Content.DOM
    )
  );

  return {
    DOM: view$,
    router: Nav.url$,
    props$
  }
};

export default main
