myExpensesControllers.controller('SessionsCtrl', ['$filter','$scope', '$location', 'Session', function ($filter, $scope, $location, Session) {
  $scope.new = function() {
    session = Session.currentSession();

    if (session.isAuthenticated()) {
      $location.path('/');
    } else {
      $scope.session = Session.currentSession();
    };
  }

  $scope.create = function(session) {
    session.$signIn(function(data) {
      $location.path('/');
    }, function(err) {
      console.log(err);
    });
  }
}]);