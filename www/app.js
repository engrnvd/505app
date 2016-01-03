'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'CustomDirectives',
    'Api',
    'Home',
	'Login',
	'SignUp',
	'ForgotPassword',
	'SplashScreen',
	'Logout',
	'WeeklyMenu',
	'BillingDetails',
	'PlaceOrder'// append more modules here
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/login'});
}]);

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    document.addEventListener("backbutton", function () {
        navigator.app.exitApp();
        return false;
    }, false);
}

// @codekit-append "js/custom-directives.js"
// @codekit-append "js/custom-services/Api.js"
// @codekit-append "js/developer.js"
// @codekit-append "pages/home/home.js"
// @codekit-append "pages/login/login.js"
// @codekit-append "pages/sign-up/sign-up.js"
// @codekit-append "pages/forgot-password/forgot-password.js"
// @codekit-append "pages/splash-screen/splash-screen.js"
// @codekit-append "pages/logout/logout.js"
// @codekit-append "pages/weekly-menu/weekly-menu.js"
// @codekit-append "pages/billing-details/billing-details.js"
// @codekit-append "pages/place-order/place-order.js"
// append more files here
