myExpensesControllers.$inject = ['$scope', 'Home'];
myExpensesControllers.controller('HomeCtrl', ['$scope', 'Home', function ($scope, Home) {
  $scope.helloWorld = function() {
    $scope.hello = "Hello World";
  }
}]);
