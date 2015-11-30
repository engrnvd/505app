'use strict';

angular.module('ForgotPassword', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forgot-password', {
    templateUrl: 'pages/forgot-password/forgot-password.html',
    controller: 'ForgotPasswordCtrl'
  });
}])

.controller('ForgotPasswordCtrl', [function() {

}]);