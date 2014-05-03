myExpensesRoutes.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider.when('/expenses', {
    templateUrl: window.viewsPath.concat('expenses/index.html'),
    controller: 'ExpensesCtrl',
  });

  $routeProvider.otherwise({
    redirectTo: '/expenses'
  });

  if(window.history && window.history.pushState){
    $locationProvider.html5Mode(true);
  }
}]);