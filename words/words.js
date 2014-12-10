'use strict';

angular.module('myApp.words', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/words', {
    templateUrl: 'words/words.html',
    controller: 'wordsCtrl'
  });
}])

.controller('wordsCtrl', function($scope, $http, $sce) {
  $http.get('projects/projects.json').success(function(data) {
    $scope.projects = data;

//Tells the $sce module that the URLs we're passing are OK and not part of an XSS attack
    var x;
    for (x in $scope.projects) {
      var y = $scope.projects[x].youtubeUrl;
      $scope.projects[x].youtubeUrl = $sce.trustAsResourceUrl(y);
    }
  });
});
