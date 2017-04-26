var controllers = require('../indexModule');

// echarts integration
controllers.controller('echartController', ['$scope', function ($scope) {
  $scope.firstName = 'John';
  $scope.lastName = 'Snow';
}]);