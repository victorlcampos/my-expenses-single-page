'use strict';

describe('Session', function() {
  var httpBackend,
      api_url,
      response,
      service;

  beforeEach(module("myExpensesApp"));
  beforeEach(inject(function($rootScope, $httpBackend, $window, Session) {
    api_url = $window.remoteApis.sessions;
    httpBackend = $httpBackend;
    service = Session;
  }));
});