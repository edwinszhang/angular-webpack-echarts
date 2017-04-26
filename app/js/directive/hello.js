/**
 * Created by edwin on 26/04/2017.
 */

var app = require('../app');

app.directive("hello", function () {
  return {
    restrict: "EACM",
    replace: true,
    template: "<div>Hello, this is a custom directive.</div>",
  };
});

