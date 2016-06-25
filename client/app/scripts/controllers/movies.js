'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function($scope) {
    $scope.items = [
      {
        title: "The Empire Strikes Back",
        url: "http://youtube.com/embed/1g3_CFmnU7k"
      },
      {
        title: "Return of the Jedi",
        url: "http://youtube.com/embed/5UfA_aKBGMc"
      }
    ];

    console.log($scope.items)
});
