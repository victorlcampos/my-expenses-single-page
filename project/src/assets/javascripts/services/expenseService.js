myExpensesServices.factory('Expense', ['$resource', '$filter', '$cookieStore', function($resource, $filter, $cookieStore){
  var service = $resource(window.remoteApis.myExpense.concat('/expenses/:id'), { token: $cookieStore.get('token') }, {
    'create': {method:'POST'},
  });

  service.prototype.date = $filter("date")(Date.now(), 'yyyy-MM-dd');


  return service;
}]);

