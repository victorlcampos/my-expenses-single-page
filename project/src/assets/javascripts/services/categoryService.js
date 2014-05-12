myExpensesServices.factory('Category', ['$resource', function($resource){
  return $resource(window.remoteApis.myExpense.concat('/categories/:id'), {}, {
    'query':  {method:'GET', isArray:true, withCredentials: true },
  });
}]);