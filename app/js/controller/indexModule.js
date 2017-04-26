/**
 * Created by edwin on 2017/4/25.
 */
var app = require('../app');

var indexControllers = angular.module('indexControllers', []);

// route
app
  .config(["$routeProvider", function ($routeProvider) {
    // put your config here
    $routeProvider
      .when('/expression', {
        template: require('../../template/index/expression.html'),
        controller: 'expressionController'
      })
      .when('/echart', {
        template: require('../../template/index/echart.html'),
        controller: 'echartController'
      })
      .when('/directive', {
        template: require('../../template/index/directive.html'),
        controller: 'directiveController'
      })
      .otherwise({
        template: require('../../template/index.html'),
        controller: 'indexController'
      })
  }]);

module.exports = indexControllers;