// define app module
var echarts = angular.module('echarts', [
	'ngRoute',
	'ngAnimate',
	'echartControllers'
]);

echarts
	.config(["$routeProvider", function ($routeProvider) {
		// put your config here

	}]);

echarts.run(["$location","$rootScope",function($location,$rootScope){

	$rootScope.go = function ( path ) {
		$location.path( path );
	};
}]);

module.exports = echarts;