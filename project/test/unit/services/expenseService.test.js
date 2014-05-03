'use strict';

describe('Expense', function() {
  var httpBackend,
      api_url,
      response,
      service;

  beforeEach(module("myExpensesApp"));
  beforeEach(inject(function($rootScope, $httpBackend, $window, Expense) {
    api_url = $window.remoteApis.expenses;
    httpBackend = $httpBackend;
    service = Expense;
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
      var expenses = service.query();
      httpBackend.flush();

      expect(expenses[0].id).toEqual(response[0].id);
      expect(expenses[1].id).toEqual(response[1].id);
      expect(expenses[2].id).toEqual(response[2].id);
      expect(expenses[3].id).toEqual(response[3].id);
    });
  });
});