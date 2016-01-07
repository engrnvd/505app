'use strict';

angular.module('Profile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'pages/profile/profile.html',
    controller: 'ProfileCtrl'
  });
}])

.controller('ProfileCtrl', ['Api', '$scope', '$rootScope', function ( Api, scope, $rootScope ) {
        scope.updatePhone = function () {
            $("#profile-page").showLoader();
            Api.post("officer-profile/update-phone",$rootScope.user).then(function (response) {
                Api.checkAndHandleError(response);
                var type = response.data.error? "danger":"success";
                $.showMessage(response.data.data,type);
                $("#profile-page").hideLoader();
            });
        };
    }]);