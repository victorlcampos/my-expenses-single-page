'use strict';

describe('ExpensesCtrl', function() {
  var $scope;

  beforeEach(module("myExpensesApp"));
  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();

    $controller("ExpensesCtrl", {
      '$scope': $scope
    });
  }));

  it('should have a method to print hello world', function() {

  });
});
