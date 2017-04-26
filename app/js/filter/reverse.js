/**
 * Created by edwin on 26/04/2017.
 */
var app = require("../app.js");

app.filter('reverse', function() { //可以注入依赖
  return function(text) {
    return text.split("").reverse().join("");
  }
});