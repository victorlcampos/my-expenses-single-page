myExpensesServices.factory('Expense', ['$resource', '$filter', function($resource, $filter){
  var service = $resource(window.remoteApis.myExpense.concat('/expenses/:id'), {}, {
    'create': {method:'POST', withCredentials: true },
  });

  service.prototype.date = $filter("date")(Date.now(), 'yyyy-MM-dd');


  return service;
}]);

