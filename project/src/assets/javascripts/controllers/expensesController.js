myExpensesControllers.controller('ExpensesCtrl', ['$filter','$scope', 'Category', 'Expense', function ($filter, $scope, Category, Expense) {
  $scope.new = function() {
    $scope.expense      = new Expense();

    $scope.categories    = Category.query();
    $scope.subcategories = {};

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
  }

  $scope.create = function(expense) {
    expense.$create();

    function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function saveCategory(categoryLabel, categories, value) {
        var category = categories.filter(function(category) {
          return category.label == categoryLabel;
        })[0];

        if (!category) {
          category = {
            label: categoryLabel,
            color: getRandomColor(),
            value: 0,
            subcategories: [

            ]
          }
          categories.push(category);
        };

        category.value += value;

        return category;
    }

    var value = expense.value*100;

    var category = saveCategory(expense.category, $scope.categories, value);
    if (expense.subcategory) {
      saveCategory(expense.subcategory, category.subcategories, value)
    }

    $scope.expense      = new Expense();
  }

}]);
