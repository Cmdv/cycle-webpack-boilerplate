# Cycle-Webpack-Tape-boilerplate

## [VIEW DEMO](http://cmdv.github.io/cycle-webpack-boilerplate/)

Boilerplate for bdd / tdd / testing with Tape + Testem + Webpack + Cycle.js

Hot reloads app + re-runs test on file updates!

## Installation

```javascript
npm install //install dependencies
```


## Usage

```javascript
npm start //start webpack-dev-server with cycle + hot reload
```

Open another terminal tab and then :

```javascript 
npm test //start testem + tape
```
For tests to run properlly and hot reloading, make sure you have both npm scripts running at the same time!

## Dependencies

[Cyclejs](http://cycle.js.org/) - View for our app

[tape](https://github.com/substack/tape) - tap-producing test harness for node and browsers

[testem](https://github.com/airportyh/testem) - test runner

[webpack](https://github.com/airportyh/testem) - a bundler for JavaScript

[webpack-dev-server](https://github.com/webpack/webpack-dev-server) - updates browsers on changes

[babel](https://github.com/babel/babel) - compiler for converting ES6

## To Do's
1. More tests!

2. Get an isolated component built that can be reused in multiple places in the app

3. Create a localStorage implementation to keep state alive over page refresh

4. Look at expanding with different build tools, specifically Browserify.

## Credit
[@TylorS](https://github.com/TylorS) for helping with the router passing state. :+1: 

and the rest of the cycle community for endless question answering! 

also check out a list of all things Cycle related [here](https://github.com/vic/awesome-cyclejs) by [vic](https://github.com/vic)
