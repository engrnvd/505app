'use strict';

angular.module('Home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$http', '$scope', function ( $http, scope ) {
    //SiteGlobals.checkLoggedIn();
    $("#menu-today").showLoader();
    $http.get(SiteGlobals.apiUrl+"menu/menu-today").then(function (response) {
        scope.menuToday = response.data.data;
        $("#menu-today").hideLoader();
    });
    scope.pages = SiteGlobals.pages;
}]);