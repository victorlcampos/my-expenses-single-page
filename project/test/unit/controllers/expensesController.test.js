'use strict';

describe('ExpensesCtrl', function() {
  var $scope;

  beforeEach(module("myExpensesApp"));
  beforeEach(inject(function($filter, $rootScope, $controller, Category) {
    $scope = $rootScope.$new();

    Category.query = function() {
      return [
                {
                  label:"Basic", color:"#3366CC", value:1000*Math.random(), subcategories: [
                    {label:"SubBasic1", color:"#3366CC", value:1000*Math.random()},
                    {label:"SubBasic2", color:"#3366CC", value:1000*Math.random()},
                    {label:"SubBasic3", color:"#3366CC", value:1000*Math.random()}
                  ]
                },
                {
                  label:"Plus" , color:"#DC3912", value:1000*Math.random(), subcategories: [
                    {label:"SubPlus1", color:"#3366CC", value:1000*Math.random()},
                    {label:"SubPlus2", color:"#3366CC", value:1000*Math.random()},
                    {label:"SubPlus3", color:"#3366CC", value:1000*Math.random()}
                  ]
                },
                {
                  label:"Lite" , color:"#FF9900", value:1000*Math.random(), subcategories: [
                    {label:"SubLite1", color:"#3366CC", value:1000*Math.random()},
                    {label:"SubLite2", color:"#3366CC", value:1000*Math.random()},
                    {label:"SubLite3", color:"#3366CC", value:1000*Math.random()}
                  ]
                },
                {
                  label:"Elite", color:"#109618", value:1000*Math.random(), subcategories: [
                    {label:"SubElite1", color:"#3366CC", value:1000*Math.random()},
                    {label:"SubElite2", color:"#3366CC", value:1000*Math.random()},
                    {label:"SubElite3", color:"#3366CC", value:1000*Math.random()}
                  ]
                },
                {
                  label:"Delux", color:"#990099", value:1000*Math.random(), subcategories: [
                    {label:"SubDelux1", color:"#3366CC", value:1000*Math.random()},
                    {label:"SubDelux2", color:"#3366CC", value:1000*Math.random()},
                    {label:"SubDelux3", color:"#3366CC", value:1000*Math.random()}
                  ]
                }
             ]
    }

    $controller("ExpensesCtrl", {
      '$filter': $filter,
      '$scope': $scope,
      'Category': Category
    });
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

});
