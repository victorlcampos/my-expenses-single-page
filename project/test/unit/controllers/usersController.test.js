'use strict';

describe('UsersCtrl', function() {
  var $scope, location, httpBackend, api_url, user;

  beforeEach(module("myExpensesApp"));
  beforeEach(inject(function($filter, $rootScope, $httpBackend, $controller, $location, $window, User) {
    $scope   = $rootScope.$new();
    location = $location;

    $controller("UsersCtrl", {
      '$location': location,
      '$filter'  : $filter ,
      '$scope'   : $scope  ,
      'User'     : User
    });

    httpBackend = $httpBackend;
    api_url     = $window.remoteApis.authentication+'/users';
    user        = new User;
  }));

  describe('#create', function() {

    beforeEach(function() {
      httpBackend.whenPOST(api_url).respond(200, {});

      location.path = function(url) {
        location.url = url
      }

    });

    it('should redirect to home', function() {
      $scope.create(user);
      httpBackend.flush();

      expect(location.url).toBe('/');
    });
  });
});
