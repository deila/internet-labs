'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {templateUrl: 'partials/home.html', controller: 'Home'})
    .when('/home/auth', {templateUrl: 'partials/auth.html', controller: 'Home'})
    .when('/polls', {templateUrl: 'partials/polls.html', controller: 'Polls'})
    .when('/search', {templateUrl: 'partials/search.html', controller: 'Search'})
    .when('/books/:bookId', {templateUrl: 'partials/book.html', controller: 'Books'})
    .otherwise({redirectTo: '/home'});
}]);
