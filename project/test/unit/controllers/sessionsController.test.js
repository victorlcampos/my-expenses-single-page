'use strict';

describe('SessionsCtrl', function() {
  var $scope;

  beforeEach(module("myExpensesApp"));
  beforeEach(inject(function($filter, $rootScope, $controller) {
    $scope = $rootScope.$new();

    $controller("SessionsCtrl", {
      '$filter': $filter,
      '$scope': $scope
    });
    $scope.new();
  }));
});
