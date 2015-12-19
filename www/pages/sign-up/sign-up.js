'use strict';

angular.module('SignUp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sign-up', {
    templateUrl: 'pages/sign-up/sign-up.html',
    controller: 'SignUpCtrl'
  });
}])

.controller('SignUpCtrl', ['$scope','$http', function(scope,$http) {
    scope.form = {};
    scope.requestSignUp = function () {
        $.showLoader();
        $http.post(SiteGlobals.apiUrl+"officer-profile/sign-up",scope.form).then(function (response) {
            var type = response.data.error? "danger":"success";
            $.showMessage(response.data.data,type);
            if(!response.data.error)
                scope.form = {};
            $.hideLoader();
        });
    };
}]);