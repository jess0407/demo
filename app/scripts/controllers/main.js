'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('MainCtrl', function ($scope, $http) {

  	$scope.url = '/data/salesperson.json';

  	$http.get($scope.url).success(function(response){
  		$scope.team = response;
  	});
    
  });
