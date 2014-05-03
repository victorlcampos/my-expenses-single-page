myExpensesControllers.controller('ExpensesCtrl', ['$filter','$scope', function ($filter, $scope) {
  $scope.expense = {
    date : $filter("date")(Date.now(), 'yyyy-MM-dd')
  };

  $scope.categories = [
    {label:"Basic", color:"#3366CC", value:1000*Math.random()},
    {label:"Plus" , color:"#DC3912", value:1000*Math.random()},
    {label:"Lite" , color:"#FF9900", value:1000*Math.random()},
    {label:"Elite", color:"#109618", value:1000*Math.random()},
    {label:"Delux", color:"#990099", value:1000*Math.random()}
  ];

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
