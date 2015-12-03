'use strict';

angular.module('Login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'pages/login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope','$location',function(scope,$location) {
    scope.login = function () {
        $location.path("/home");
    };
}]);