myExpensesServices.factory('Session', ['$resource', '$location','$cookieStore', '$cookies', function($resource, $location, $cookieStore, $cookies){
  service =  $resource(window.remoteApis.authentication.concat('/auth/sessions'), {}, {
    'signIn':      {method:'POST' },
    'signOut':     {method:'DELETE', withCredentials: true},
    'currentUser': {method:'GET', withCredentials: true, url: window.remoteApis.authentication.concat('/auth/sessions/current_user') }
  });

  service.currentSession = function() {
    return new service();
  }

  service.prototype = {
    currentUser: function() { return $cookieStore.get('user'); },
    isAuthenticated: function() {
      return $cookies.user ? true : false;
    },
    $signIn: function(successfulCb, failedCb) {
      service.signIn({}, this, function(data){
        console.log($cookies);
        $cookieStore.put('user', data);
        if (successfulCb) {
          successfulCb(data);
        };
      }, function(err){
        this.user = false;
        if (failedCb) {
          failedCb(err);
        };
      });
    },
    $signOut: function(successfulCb, failedCb) {
      service.signOut({}, this, function(data){
        $cookieStore.remove('user');
        $location.path('/');
      }, function(err){
        alert('request failed');
      });
    }
  }

  return service;
}]);