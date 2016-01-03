'use strict';

angular.module('PlaceOrder', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/place-order', {
    templateUrl: 'pages/place-order/place-order.html',
    controller: 'PlaceOrderCtrl'
  });
}])

.controller('PlaceOrderCtrl', ['Api', '$scope', function ( Api, scope ) {
    scope.form = {};
    scope.placeOrder = function () {
        $.showLoader();
        Api.post("orders/place-order",scope.form).then(function (response) {
            var type = response.data.error? "danger":"success";
            $.showMessage(response.data.data,type);
            if(!response.data.error)
                scope.form = {};
            $.hideLoader();
        });
    };
}]);