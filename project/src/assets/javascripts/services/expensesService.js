myExpensesServices.factory('Expense', ['$resource', function($resource){
  return $resource(window.remoteApis.expenses.concat('/:id'), {}, {
    'get':    {method:'GET'               },
    'create': {method:'POST'              },
    'update': {method:'PUT'               },
    'query':  {method:'GET', isArray:true },
    'remove': {method:'DELETE'            },
    'delete': {method:'DELETE'            }
  });
}]);
