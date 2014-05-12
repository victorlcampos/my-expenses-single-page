'use strict';

describe('User', function() {
  var httpBackend,
      api_url,
      response,
      service;

  beforeEach(module("myExpensesApp"));

  beforeEach(inject(function($rootScope, $httpBackend, $window, User) {
    api_url = $window.remoteApis.authentication;
    httpBackend = $httpBackend;
    service = User;
  }));
});