var controllers = require('../indexModule');

// expression lesson
controllers
  .controller('serviceController',
    ['$scope', '$location', '$http','$timeout','calculator', function ($scope, $location, $http, $timeout, calculator) {
    // $location service
    $scope.pageUrl = $location.absUrl();
    $timeout(function () {
      $scope.pageUrl = "How are you today?";
    }, 2000);

    // $http service
    $http.get('/app/mock/bing.json').then(function (response) {
      $scope.bingResponse = response.data;
    });

    // custom service
    $scope.numX = 1;
    $scope.numY = 2;
    $scope.getResult = function () {
      return calculator.sum($scope.numX,  $scope.numY);
    }

}]);