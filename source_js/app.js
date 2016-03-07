var app = angular.module('mp3',['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/List', {
        templateUrl: 'partials/list.html',
        controller: 'ListController'
      }).
      when('/Gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'GalleryController'
      }).
      when('/Details/:imdbID', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsController'
      }).
      otherwise({
        redirectTo: '/List'
      });
}]);
