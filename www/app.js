'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'CustomDirectives',
    'Home',
	'Login',
	'SignUp',
	'ForgotPassword'// append more modules here
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/sign-up', {
            controller: 'SignUpCtrl',
            templateUrl: "pages/sign-up/sign-up.html"
        }).
        when('/forgot-password', {
            controller: 'ForgotPasswordCtrl',
            templateUrl: 'pages/forgot-password/forgot-password.html'
        }).
		when('/login', {
            controller: 'LoginCtrl',
            templateUrl: 'pages/login/login.html'
        }).
		when('/home', {
            controller: 'HomeCtrl',
            templateUrl: 'pages/home/home.html'
        }).
		// append more pages here
        otherwise({redirectTo: '/home'});
}]);

// @codekit-append "js/custom-directives.js"
// @codekit-append "js/developer.js"
// @codekit-append "pages/home/home.js"
// @codekit-append "pages/login/login.js"
// @codekit-append "pages/sign-up/sign-up.js"
// @codekit-append "pages/forgot-password/forgot-password.js"
// append more files here
