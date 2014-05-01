myExpensesControllers.controller('HomeCtrl', ['$filter','$scope', 'Home', function ($filter, $scope, Home) {
  $scope.expense = {
    date    : $filter("date")(Date.now(), 'yyyy-MM-dd')
  };
}]);
