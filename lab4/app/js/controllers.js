'use strict';

/* Controllers */

var tabs = ['home', 'polls', 'search']

var activateTab = function($scope, name) {
  $scope.activeTab = {};
  tabs.forEach(function(x) {
    $scope.activeTab[x] = ''
  });
  $scope.activeTab[name] = 'active';
  if (VK.Auth.getSession()) {
    $scope.user = VK.Auth.getSession().user
  }
}

angular.module('myApp.controllers', [])

  .controller('Home', function($scope) {
    activateTab($scope, 'home')
  })

  .controller('Polls', function($scope) {
    activateTab($scope, 'polls')
  })

  .controller('Search', function($scope, $http) {
    activateTab($scope, 'search');
    $http.get('tmp/books.json')
      .then(function(res) {
        $scope.books = res.data;
      });
    $http.get('tmp/search.json')
      .then(function(res) {
        $scope.search = res.data;
      });
  })

  .controller('Books', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    activateTab($scope, 'books');
    $scope.bookId = $routeParams.bookId;
    $http.get('tmp/books/' + $routeParams.bookId)
      .then(function(res) {
        $scope.book = { name: $routeParams.bookId, content: res.data }
      });
    $scope.gotoComments = function() {
      window.scrollTo(0, $('#comments')[0].offsetTop - 60);
    };
    VK.Widgets.Comments('comments');
  }]);

