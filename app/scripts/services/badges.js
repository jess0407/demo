'use strict';

/**
 * @ngdoc service
 * @name demoApp.Badges
 * @description
 * # Badges
 * Service in the demoApp.
 */
angular.module('demoApp')
  .service('Badges', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var promise = $http.get('http://teamtreehouse.com/jessieshi.json');
    return {
      get: function(cb){
         promise.then(cb);
         return cb;
      }
    };
  });
