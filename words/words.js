'use strict';

angular.module('myApp.words', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/words', {
    templateUrl: 'words/words.html',
    controller: 'wordsCtrl'
  });
}]);

myApp.words.controller('wordsCtrl', [function($scope, $http) {
  $http.get('projects/projects.json').success(function(data) {
    $scope.projects = data
  });
}]);
