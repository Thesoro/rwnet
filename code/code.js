'use strict';

angular.module('myApp.code', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/code', {
//     templateUrl: '/html/code/code.html',
//     controller: 'codeCtrl'
//   });
// }])

.controller('codeCtrl', ['$scope', function($scope) {
  $scope.projects = [
    {name:'Transaction Document Handler',
     description: 'Rob has been working with a Seattle real estate brokerage on their agent-facing document and transaction handler. The code is proprietary and the site requires a log-in, but anonymized screenshots can be found below. Among other features, the site implements a user privileges system, Google Logins, an automated email receiver and sender, and universal AJAX updating.',
     image: "",
     technologies: ['Angular.js', 'Python', 'Google App Engine', 'SQL',"Google Cloud Platform",'jQuery', 'Javascript'],
     link: false,
     github: '',
     gallery: [],
    },
    {name:'WebProv',
     description: 'WebProv is an improv encyclopedia and suggestion generator. It stores user favorites, generates words from a number of dictionaries, and can pull tweets from a celebrity\'s twitter account to use in a scene.',
     image: "http://i.imgur.com/Tv3tWww.png",
     technologies: ['Angular.js', 'Python', 'Google App Engine', 'Twitter API', "XML", "Javascript"],
     link: "http://playbook.unexpectedproductions.org",
     github: '',
     gallery: false,
    }
  ]
  $scope.currentproject = $scope.projects[0]

  $scope.technologies = ["Ruby on Rails","Python","Angular.js","Node.js","jQuery","Javascript","Bootstrap","Amazon Web Services","Google Cloud Platform","Google App Engine","SQL", "Twitter API", "XML"]

  $scope.includesTech = function(item) {
    var out = {}
    if ($scope.currentproject.technologies.indexOf(item) >= 0) {
      out = {'font-weight':'bold'}
    }
    return out
  }
  $scope.setCurrent = function(proj) {
    $scope.currentproject = proj
  }
}]);
