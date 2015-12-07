'use strict';

angular.module('SplashScreen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/splash-screen', {
    templateUrl: 'pages/splash-screen/splash-screen.html',
    controller: 'SplashScreenCtrl'
  });
}])

.controller('SplashScreenCtrl', [function() {
    var authToken = localStorage.getItem("authToken");
    if(!authToken) window.location.href = "#/login";
    if(authToken){
        alert(authToken);
    }
}]);