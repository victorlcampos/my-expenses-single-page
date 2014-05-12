myExpensesServices.factory('User', ['$resource', function($resource){
  return $resource(window.remoteApis.authentication.concat('/users/:id'), {}, {
    'create': {method:'POST' },
  });
}]);