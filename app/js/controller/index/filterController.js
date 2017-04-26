var controllers = require('../indexModule');

// expression lesson
controllers.controller('filterController', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.person = {
    name: 'Doggy',
    age: 23,
    interest: 'reading books',
    books: {
      name: "Head First Python",
      price: 9.99
    }
  };

  $scope.users = [
    {
      name: 'Kai',
      age: 23,
      interest: 'reading books',
      books: {
        name: "Head First Python",
        price: 9.99
      }
    },
    {
      name: 'Jani',
      age: 30,
      interest: 'hiking',
      books: {
        name: "Hadoop",
        price: 19.99
      }
    },
    {
      name: 'Hege',
      age: 26,
      interest: 'Games',
      books: {
        name: "Java",
        price: 29.99
      }
    }
  ]

}]);