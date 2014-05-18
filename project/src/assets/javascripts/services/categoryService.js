myExpensesServices.factory('Category', ['$resource', '$cookieStore', function($resource, $cookieStore){
  return $resource(window.remoteApis.myExpense.concat('/categories/:id'), { token: $cookieStore.get('token') }, {
    'query':  {method:'GET', isArray:true },
  });
}]);