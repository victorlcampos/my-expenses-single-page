'use strict';

describe('<%= className %>Ctrl', function() {
  var $scope;

  beforeEach(module("myExpensesApp"));
  beforeEach(inject(function($filter, $rootScope, $controller) {
    $scope = $rootScope.$new();

    $controller("<%= className %>Ctrl", {
      '$filter': $filter,
      '$scope': $scope
    });
    $scope.new();
  }));
});
