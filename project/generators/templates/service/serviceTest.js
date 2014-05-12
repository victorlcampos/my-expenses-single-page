'use strict';

describe('<%= className %>', function() {
  var httpBackend,
      api_url,
      response,
      service;

  beforeEach(module("myExpensesApp"));
  beforeEach(inject(function($rootScope, $httpBackend, $window, <%= className %>) {
    api_url = $window.remoteApis.<%= name %>s;
    httpBackend = $httpBackend;
    service = <%= className %>;
  }));
});