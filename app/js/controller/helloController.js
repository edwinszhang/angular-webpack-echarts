/**
 * Created by edwin on 2017/4/25.
 */
var appModule = require('../app.js');

appModule
	.config(["$routeProvider", function ($routeProvider) {
		// put your config here
		$routeProvider.when('/hello', {
			template: require('../../template/hello.html'),
			controller : 'helloController'
		}).otherwise({
			template: require('../../template/index.html'),
			controller : 'indexController'
		})
	}]);

angular.module('controllers',[])
	.controller('helloController', ['$scope', function ($scope) {
		$scope.firstName = 'Shuai';
		$scope.lastName = 'Zhang';
	}]).controller('indexController', ['$scope', function ($scope) {
		$scope.firstName = 'Edwin';
		$scope.lastName = 'Chang';
	}])