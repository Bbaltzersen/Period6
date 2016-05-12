/**
 * Created by bbalt on 12/05/2016.
 */

angular.module('starter.services', [])
  .service('LoginService', function($q) {
    return {
      loginUser: function(name, pw) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        console.log(pw);
        if (name == 'user' && pw == '1') {
          deferred.resolve('Welcome ' + name + '!');
        } else {
          deferred.reject('Wrong credentials.');
        }
        promise.success = function(fn) {
          promise.then(fn);
          return promise;
        };
        promise.error = function(fn) {
          promise.then(null, fn);
          return promise;
        };
        return promise;
      }
    };
  });
