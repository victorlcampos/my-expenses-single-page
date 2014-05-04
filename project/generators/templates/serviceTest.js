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

  describe('#query', function() {

    beforeEach(inject(function() {
      response = [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        }
      ]

      httpBackend.whenGET(api_url).respond(response);
    }));

    it('should have a method to print hello world', function() {
      var <%= name %>s = service.query();
      httpBackend.flush();

      expect(<%= name %>s[0].id).toEqual(response[0].id);
      expect(<%= name %>s[1].id).toEqual(response[1].id);
      expect(<%= name %>s[2].id).toEqual(response[2].id);
      expect(<%= name %>s[3].id).toEqual(response[3].id);
    });
  });
});