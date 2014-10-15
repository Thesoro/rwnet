'use strict';

angular.module('myApp.words', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/words', {
    templateUrl: 'words/words.html',
    controller: 'wordsCtrl'
  });
}])

.controller('wordsCtrl', [function() {

}]);
