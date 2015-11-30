'use strict';

angular.module('SignUp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sign-up', {
    templateUrl: 'pages/sign-up/sign-up.html',
    controller: 'SignUpCtrl'
  });
}])

.controller('SignUpCtrl', [function() {

}]);