'use strict';

angular.module('Login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'pages/login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope','$location','$http','$rootScope',function(scope,$location,$http,$rootScope) {
    scope.form = {username:"",password:""};
    scope.login = function () {
        $.showLoader();
        $http.post(SiteGlobals.apiUrl+"officer-profile/login",scope.form).then(function (response) {
            if (!response.data.error) {
                var res = JSON.parse(response.data.data);
                localStorage.setItem("authToken", res.authToken);
                localStorage.setItem("user", JSON.stringify(res.currentUser));
                $location.path("/home");
            } else {
                $.showMessage(response.data.data,"danger");
            }
            $.hideLoader();
        });
    };
}]);