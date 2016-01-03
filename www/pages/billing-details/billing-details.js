'use strict';

angular.module('BillingDetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/billing-details', {
    templateUrl: 'pages/billing-details/billing-details.html',
    controller: 'BillingDetailsCtrl'
  });
}])

.controller('BillingDetailsCtrl', ['Api', '$scope', function ( Api, scope ) {
    var date = new Date();
    scope.form = {
        month: date.getMonth().toString(),
        year: date.getFullYear(),
        monthsList: Date.monthsList()
    };
    scope.form = {
        month: '10',
        year: 2015,
        monthsList: Date.monthsList()
    };

    scope.loadRecords = function () {
        $.showLoader();
        var data = {
            month: parseInt(scope.form.month)+1,
            year: scope.form.year
        };
        Api.post("officer-profile/billing-details",data).then(function (response) {
            Api.checkAndHandleError(response);
            scope.details = response.data.data;
            $.hideLoader();
        });
    };

    scope.loadRecords();

}]);