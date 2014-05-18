myExpensesControllers.controller('UsersCtrl',
                                ['$filter','$scope', '$location', 'User', '$rootScope',
                                function ($filter, $scope, $location, User, $rootScope) {
  $scope.new = function() {
    $scope.user = new User();
  }

  $scope.create = function(user) {
    user.$create(function(data){
      $rootScope.currentSession.setUser(data);
      $location.path('/');
    }, function(error) {
      console.log(error.data.message);
    });
  };
}]);
