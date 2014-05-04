'use strict';

describe('Category', function() {
  var httpBackend,
      api_url,
      response,
      service;

  beforeEach(module("myExpensesApp"));
  beforeEach(inject(function($rootScope, $httpBackend, $window, Category) {
    api_url = $window.remoteApis.myExpense+'/categories';
    httpBackend = $httpBackend;
    service = Category;
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
      var categories = service.query();
      httpBackend.flush();

      expect(categories[0].id).toEqual(response[0].id);
      expect(categories[1].id).toEqual(response[1].id);
      expect(categories[2].id).toEqual(response[2].id);
      expect(categories[3].id).toEqual(response[3].id);
    });
  });
});