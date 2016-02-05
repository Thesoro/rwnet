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
     description: 'Rob has been working with a Seattle real estate brokerage on their agent-facing document and transaction handler. The code is proprietary and the site requires a log-in, but anonymized screenshots can be found below. Among other features, the site implements a user privileges system, Google Logins, an automated email receiver and sender, and universal AJAX updating. This solution is used by over a hundred users daily at a highly successful real estate brokerage.',
     image: "tdh-preview",
     technologies: ['Angular.js', 'Python','Bootstrap', 'Google App Engine', 'SQL',"Google Cloud Platform",'jQuery', 'Javascript'],
     link: false,
     github: false,
     gallery: ['tdh-gal-1', 'tdh-gal-2', 'tdh-gal-3', 'tdh-gal-4', 'tdh-gal-5'],
    },
    {name:'WebProv',
     description: 'WebProv is an improv encyclopedia and suggestion generator. It stores user favorites, generates words from a number of dictionaries, and can pull tweets from a celebrity\'s twitter account to use in a scene.',
     image: "webprov-preview",
     technologies: ['Angular.js', 'Python', 'Bootstrap', 'Google App Engine', 'Twitter API', "XML", "Javascript"],
     link: "http://playbook.unexpectedproductions.org",
     github: 'thesoro/webprov-1079',
     gallery: false,
    },
    {name:'OpeningLinesBot',
     description: 'OpeningLinesBot, along with the related GregorSamsaBot, is a project based on parsing and filtering Wiktionary\'s entire 5GB XML dictionary. It includes a parser that picks out words, sorts them by part of speech, and eliminates many of them based on a number of criteria. The filtered dictionaries are used to be substituted in famous opening lines regularly cronjobbed calls to the Twitter API.',
     image: "samsabot-preview",
     technologies: ['Python', 'Google App Engine', 'Twitter API', "XML"],
     link: "http://twitter.com/OpeningLinesBot",
     github: 'thesoro/gregorsamsabot',
     gallery: false,
    },
  ]
  $scope.currentproject = $scope.projects[0]

  $scope.currentmodal = ''

  $scope.technologies = ["Ruby on Rails","Python","Angular.js","Node.js","jQuery","Javascript","Bootstrap","Amazon Web Services","Google Cloud Platform","Google App Engine","SQL", "Twitter API", "XML"]

  $scope.includesTech = function(item) {
    var out = {};
    if ($scope.currentproject.technologies.indexOf(item) >= 0) {
      out = {'font-weight':'bold'};
    };
    return out;
  };
  $scope.setCurrent = function(proj) {
    $scope.currentproject = proj;
  };

  $scope.setModal = function(img) {
    $scope.currentmodal = img;
  }
}]);
