var myExpensesApp  = angular.module('myExpensesApp', [
  'myExpensesRoutes',
  'myExpensesControllers',
  'myExpensesServices',
  'dttt.dddDonut'
]);

var myExpensesRoutes      = angular.module('myExpensesRoutes'     , ['ngRoute'                ]);
var myExpensesControllers = angular.module('myExpensesControllers', [                         ]);
var myExpensesServices    = angular.module('myExpensesServices'   , ['ngResource', 'ngCookies']);