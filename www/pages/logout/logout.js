'use strict';

angular.module('Logout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/logout', {
    templateUrl: 'pages/logout/logout.html',
    controller: 'LogoutCtrl'
  });
}])

.controller('LogoutCtrl', ['Api','$location',function(Api,$location) {
    $.showLoader();
    Api.post("officer-profile/logout").then(function (res) {
        Api.checkAndHandleError(res);
        if(res.data.error){
            $.showMessage(res.data.data,"info");
            $location.path("/home");
        }else{
            localStorage.removeItem("authToken");
            localStorage.removeItem("user");
            $location.path("/login");
        }
        $.hideLoader();
    });
}]);