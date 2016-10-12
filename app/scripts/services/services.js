angular.module('myApp.services', [])

/* Service to return data from file */
.factory('fileService', ['$q', '$http', function($q, $http) {
  return {
    getFile: function(path) {
      var q = $q.defer();

      /* Get file and return promise */
      $http.get(path).then(function(response) {
        q.resolve(response.data);
      }, function(err) {
        q.reject(err);
      });

      return q.promise;
    }
  }
}]);