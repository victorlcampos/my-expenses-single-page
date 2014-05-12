'use strict';

describe('ExpensesCtrl', function() {
  var $scope;

  beforeEach(module("myExpensesApp"));
  beforeEach(inject(function($filter, $rootScope, $controller, Category, Expense) {
    $scope = $rootScope.$new();

    Category.query = function() {
      return [
                {
                  label:"Basic", color:"#3366CC", value:10000, subcategories: [
                    {label:"SubBasic1", color:"#3366CC", value:2000},
                    {label:"SubBasic2", color:"#3366CC", value:3000},
                    {label:"SubBasic3", color:"#3366CC", value:5000}
                  ]
                },
                {
                  label:"Plus" , color:"#DC3912", value:200, subcategories: [
                    {label:"SubPlus1", color:"#3366CC", value:4000},
                    {label:"SubPlus2", color:"#3366CC", value:6000},
                    {label:"SubPlus3", color:"#3366CC", value:10000}
                  ]
                },
                {
                  label:"Lite" , color:"#FF9900", value:300, subcategories: [
                    {label:"SubLite1", color:"#3366CC", value:6000},
                    {label:"SubLite2", color:"#3366CC", value:9000},
                    {label:"SubLite3", color:"#3366CC", value:15000}
                  ]
                },
                {
                  label:"Elite", color:"#109618", value:400, subcategories: [
                    {label:"SubElite1", color:"#3366CC", value:8000},
                    {label:"SubElite2", color:"#3366CC", value:12000},
                    {label:"SubElite3", color:"#3366CC", value:20000}
                  ]
                },
                {
                  label:"Delux", color:"#990099", value:500, subcategories: [
                    {label:"SubDelux1", color:"#3366CC", value:10000},
                    {label:"SubDelux2", color:"#3366CC", value:15000},
                    {label:"SubDelux3", color:"#3366CC", value:25000}
                  ]
                }
             ]
    }

    $controller("ExpensesCtrl", {
      '$filter': $filter,
      '$scope': $scope,
      'Category': Category,
      'Expense': Expense
    });
    $scope.new();
  }));

  it('should select subcategories when category change', function() {
      expect(jQuery.isEmptyObject($scope.subcategories)).toBe(true);

      $scope.expense.category = 'Basic';
      $scope.$apply()

      expect(jQuery.isEmptyObject($scope.subcategories)).toBe(false);
      expect($scope.subcategories[1].label).toBe("SubBasic2");
  });

  it('should empty subcategories when category is new', function() {
      expect(jQuery.isEmptyObject($scope.subcategories)).toBe(true);

      $scope.expense.category = 'New';
      $scope.$apply()

      expect(jQuery.isEmptyObject($scope.subcategories)).toBe(true);
  });

  describe('#create', function() {
    describe('successfully saved', function() {
      var expense;

      beforeEach(function() {
        expense = {
          value: 100.00,
          $create: function () {
            expense.save = true;
          }
        }
      });

      it('should save expense', function() {
        $scope.create(expense);
        expect(expense.save).toBe(true);
      });

      it('should add new category with it did not exist', function() {
        expense.category = 'New';
        $scope.create(expense);
        var newCategory = $scope.categories.filter(function( obj ) { return obj.label == 'New' })[0];

        expect(newCategory.label).toBe('New');
        expect(newCategory.value).toBe(10000);
      });

      it('should sum value to selected category', function() {
        expense.category = 'Basic';
        $scope.create(expense);
        var basicCategory = $scope.categories.filter(function( obj ) { return obj.label == 'Basic' })[0];

        expect(basicCategory.label).toBe('Basic');
        expect(basicCategory.value).toBe(20000);
      });

      it('should add new subcategory with it did not exist', function() {
        expense.category    = 'Basic';
        expense.subcategory = 'newSubcategory';
        $scope.create(expense);

        var basicCategory  = $scope.categories.filter(function( obj ) { return obj.label == 'Basic' })[0];
        var newSubcategory = basicCategory.subcategories.filter(function( obj ) { return obj.label == 'newSubcategory' })[0];

        expect(newSubcategory.label).toBe('newSubcategory');
        expect(newSubcategory.value).toBe(10000);
      });

      it('should sum value to selected subcategory', function() {
        expense.category    = 'Basic';
        expense.subcategory = 'SubBasic1';
        $scope.create(expense);

        var basicCategory  = $scope.categories.filter(function( obj )           { return obj.label == 'Basic'     })[0];
        var subcategory1   = basicCategory.subcategories.filter(function( obj ) { return obj.label == 'SubBasic1' })[0];

        expect(subcategory1.label).toBe('SubBasic1');
        expect(subcategory1.value).toBe(12000);
      });
    })
  });
});
