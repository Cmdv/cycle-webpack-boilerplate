import Rx from 'rx';
import {div, h1}  from '@cycle/dom';

const contentView = state$ => state$.map(
  ({routeValue,}) => {
    return div('.innerContent', [routeValue])
  }
).distinctUntilChanged();

export default contentView
