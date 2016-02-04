'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.main',
  'myApp.contact',
  'myApp.version',
  'myApp.code',
  'myApp.words'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when("/main", {
    controller: "mainCtrl",
    title: "main",
    templateUrl: "/html/main/main.html"
  })
  .when("/contact", {
    controller: "contactCtrl",
    title: "contact",
    templateUrl: "/html/contact/contact.html"
  })
  .when("/code", {
    controller: "codeCtrl",
    title: "code",
    templateUrl: "/html/code/code.html"
  })
  .when("/words", {
    controller: "wordsCtrl",
    title: "words",
    templateUrl: "/html/words/words.html"
  })
  .otherwise({redirectTo: '/main'});
}]);
