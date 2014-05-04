myExpensesControllers.controller('ExpensesCtrl', ['$filter','$scope', 'Category', function ($filter, $scope, Category) {
  $scope.expense = {
    date : $filter("date")(Date.now(), 'yyyy-MM-dd')
  };

  $scope.categories    = Category.query();
  $scope.subcategories = {};
  $scope.expense       = {};

  $scope.$watch('expense.category', function(newCategory) {

    if (newCategory) {
      var result = $scope.categories.filter(function( obj ) {
        return obj.label == newCategory;
      });

      if (result[0]) {
        $scope.subcategories = result[0].subcategories;
      } else {
        $scope.subcategories = {};
      }
    }
  }, true);

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  $scope.save = function(expense) {
    var expenseCategory = expense.category;

    var found = false;

    $scope.categories.forEach(function(category) {
      if (category.label == expenseCategory) {
        category.value += expense.value;
        found = true;
      };
    });

    if(!found) {
      var category = {
        label: expense.category,
        color: getRandomColor(),
        value: expense.value
      }

      $scope.categories.push(category);
    }
  }
}]);
