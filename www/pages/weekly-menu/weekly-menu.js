'use strict';

angular.module('WeeklyMenu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/weekly-menu', {
    templateUrl: 'pages/weekly-menu/weekly-menu.html',
    controller: 'WeeklyMenuCtrl'
  });
}])

.controller('WeeklyMenuCtrl', ['Api', '$scope', function ( Api, scope ) {
        $("#menu").showLoader();
        Api.post("menu/get").then(function (response) {
            Api.checkAndHandleError(response);
            scope.menu = response.data.data;
            $("#menu").hideLoader();
        });
}]);