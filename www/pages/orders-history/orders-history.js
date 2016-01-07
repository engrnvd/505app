'use strict';

angular.module('OrdersHistory', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/orders-history', {
    templateUrl: 'pages/orders-history/orders-history.html',
    controller: 'OrdersHistoryCtrl'
  });
}])

.controller('OrdersHistoryCtrl', ['Api', '$scope', function ( Api, scope ) {
        $("#orders").showLoader();
        Api.post("orders/get").then(function (response) {
            Api.checkAndHandleError(response);
            scope.orders = response.data.data;
            $("#orders").hideLoader();
        });
    }]);