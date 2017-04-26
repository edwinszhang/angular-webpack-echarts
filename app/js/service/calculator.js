/**
 * Created by edwin on 26/04/2017.
 */
var app = require('../app.js');

app.service('calculator', function () {
  this.sum = function (x, y) {
    return x/1 + y/1;
  };
});
