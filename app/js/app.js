// define app module
var app = angular.module('app', [
	'ngRoute',
	'indexControllers',
	'angular-echarts'
]);

app
	.config(["$routeProvider", function ($routeProvider) {
		// put your config here

	}]);

app.run(["$location","$rootScope",function($location,$rootScope){

	$rootScope.go = function ( path ) {
		$location.path( path );
	};
}]);

module.exports = app;