'use strict';

angular.module('ForgotPassword', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forgot-password', {
    templateUrl: 'pages/forgot-password/forgot-password.html',
    controller: 'ForgotPasswordCtrl'
  });
}])

.controller('ForgotPasswordCtrl', ['Api', '$scope', function (Api, scope) {
        scope.form = {};
        scope.submit = function () {
            $.showLoader();
            Api.post("officer-profile/forgot-pwd", scope.form).then(function (response) {
                var type = response.data.error ? "danger" : "success";
                $.showMessage(response.data.data, type);
                if (!response.data.error)
                    scope.form = {};
                $.hideLoader();
            });
        };
}]);