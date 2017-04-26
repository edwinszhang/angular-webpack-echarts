var controllers = require('../indexModule');

// expression lesson
controllers.controller('expressionController', ['$scope', function ($scope) {
  $scope.firstName = 'Shuai';
  $scope.lastName = 'Zhang';

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
  }
}]);