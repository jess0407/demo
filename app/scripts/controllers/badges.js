'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:BadgesCtrl
 * @description
 * # BadgesCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('BadgesCtrl', function ($scope,Badges) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   Badges.get(function(data){
        $scope.badges = data.data.badges;
        $scope.count = $scope.badges.length;
    });

  });
