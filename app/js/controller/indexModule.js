/**
 * Created by edwin on 2017/4/25.
 */
var echarts = require('../echarts');

var echartControllers = angular.module('echartControllers', ['ngAnimate']);


// route
echarts
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/expression', {
        template: require('../../template/echarts/expression.html'),
        controller: 'expressionController'
      })
      .when('/echart', {
        template: require('../../template/echarts/echarts.html'),
        controller: 'echartController'
      })
      .when('/line', {
        template: require('../../template/echarts/line.html'),
        controller: 'lineController'
      })
      .otherwise({
        template: require('../../template/echarts/default.html'),
        controller: 'indexController'
      })
  }]);


echartControllers.controller('indexController', ['$scope', function ($scope) {
  $scope.firstName = 'Jetty';
  $scope.lastName = 'Tomson';
}]);

module.exports = echartControllers;