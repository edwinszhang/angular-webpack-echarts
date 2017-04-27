var controllers = require('../indexModule');

// expression lesson
controllers.controller('expressionController', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.firstName = 'Shuai';
  $scope.lastName = 'Zhang';
  $rootScope.lastName = "Hakura";

  $scope.books = [
  {title: 'Book1', author: 'Zhang San', price: 25.00},
  {title: 'Book2', author: 'Li Si', price: 30.00},
  {title: 'Book3', author: 'Wang wu', price: 48.00}
  ];

  $scope.getTotalPrice = function(){
    var total = 0;
    for(var i = 0; i < $scope.books.length; i++){
      var book = $scope.books[i];
      total += (book.price);
    }
    return total;
  };

  $scope.ngModelStatus = [
    'ng-empty',
    'ng-not-empty',
    'ng-touched',
    'ng-untouched',
    'ng-valid',
    'ng-invalid',
    'ng-dirty',
    'ng-pending',
    'ng-pristine'
  ];

}]);