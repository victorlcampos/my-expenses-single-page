myExpensesRoutes.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider.when('/', {
    redirectTo: '/expenses'
  });

  $routeProvider.when('/expenses', {
    templateUrl: window.viewsPath.concat('expenses/index.html'),
    controller: 'ExpensesCtrl',
    authenticate: true
  });

  $routeProvider.when('/users/new', {
    templateUrl: window.viewsPath.concat('users/new.html'),
    controller: 'UsersCtrl',
    authenticate: false
  });

  $routeProvider.when('/login', {
    templateUrl: window.viewsPath.concat('sessions/new.html'),
    controller: 'SessionsCtrl',
    authenticate: false
  });
}]);

myExpensesRoutes.run(['$rootScope', '$location', 'Session', function ($rootScope, $location, Session) {

  currentSession            = Session.currentSession;
  $rootScope.currentSession = currentSession;

  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    route = next.$$route;

    if((typeof(route.authenticate) === "undefined" || route.authenticate) && !currentSession.isAuthenticated()){
      $location.path( "/login" );
    }
  })

}]);