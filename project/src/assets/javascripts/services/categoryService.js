myExpensesServices.factory('Category', ['$resource', function($resource){
  return $resource(window.remoteApis.myExpense.concat('/categories/:id'), {}, {
    'get':    {method:'GET'               },
    'create': {method:'POST'              },
    'update': {method:'PUT'               },
    'query':  {method:'GET', isArray:true },
    'remove': {method:'DELETE'            },
    'delete': {method:'DELETE'            }
  });
}]);