'use strict';

angular.module('Login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'pages/login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope','$location','$http',function(scope,$location,$http) {
    scope.form = {};
    scope.login = function () {
        $.showLoader();
        $http.post(SiteGlobals.apiUrl+"officer-profile/login",scope.form).then(function (response) {
            if (!response.data.error) {
                $location.path("/home");
            } else {
                var type = response.data.error? "danger":"success";
                $.showMessage(response.data.data,type);
            }
            $.hideLoader();
        });
    };
}]);