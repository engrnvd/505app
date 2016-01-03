'use strict';

angular.module('Home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['Api', '$scope', function ( Api, scope ) {
    $("#menu-today").showLoader();
        Api.post("menu/menu-today").then(function (response) {
            Api.checkAndHandleError(response);
            scope.menuToday = response.data.data;
            $("#menu-today").hideLoader();
    });
    scope.pages = SiteGlobals.pages;
}]);