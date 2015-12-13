var context = require.context("./src", true, /__test__\/\S+\.spec.js$/);
context.keys().forEach(context);
