myExpensesServices.factory('Session', ['$resource', '$location','$cookieStore', '$cookies', function($resource, $location, $cookieStore, $cookies){
  service =  $resource(window.remoteApis.authentication.concat('/auth/sessions'), {}, {
    'signIn':      {method:'POST'  , withCredentials: true },
    'signOut':     {method:'DELETE', withCredentials: true},
    'currentUser': {method:'GET'   , withCredentials: true, url: window.remoteApis.authentication.concat('/auth/sessions/current_user') }
  });

  service.prototype = {
    isAuthenticated: function() {
      return $cookies['token'] ? true : false;
    },
    $currentUser: function() {
      service.currentUser({}, function(data) {
        service.prototype.setUser(data);
      }, function(err){
        service.prototype.setUser(undefined);
      });
    },
    $signIn: function(successfulCb, failedCb) {
        service.signIn({}, this, function(data){
        service.prototype.setUser(data);
        if (successfulCb) {
          successfulCb(data);
        };
      }, function(err){
          service.prototype.setUser(undefined);
        if (failedCb) {
          failedCb(err);
        };
      });
    },
    $signOut: function() {
      service.signOut({}, this, function(data){
        service.prototype.setUser(undefined);

        $location.path('/');
      }, function(err){
        alert('request failed');
      });
    },
    setUser: function(data) {
      service.prototype.currentUser = data;

      if (data) {
        $cookieStore.put('token', data.token);
      } else {
        $cookieStore.remove('token')
      }
    }
  }

  service.currentSession = new service();
  service.currentSession.$currentUser();

  return service;
}]);