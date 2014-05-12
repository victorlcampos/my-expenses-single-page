myExpensesControllers.controller('UsersCtrl',
                                ['$filter','$scope', '$location', 'User', 'Session',
                                function ($filter, $scope, $location, User, Session) {
  $scope.new = function() {
    $scope.user = new User();
  }

  $scope.create = function(user) {
    user.$create(function(data){
      Session.currentSession().user = data;
      $location.path('/');
    }, function(error) {
      console.log(error.data.message);
    });
  };
}]);
