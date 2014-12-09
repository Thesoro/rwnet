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
    var x = $scope.projects[0].youtubeUrl;
    $scope.projects[0].youtubeUrl = $sce.trustAsResourceUrl(x);
  });



//  for (var x in $scope.projects) {
//    x[youtubeUrl] = $sce.trustAsResourceUrl(x[youtubeUrl]);
//  }
});
