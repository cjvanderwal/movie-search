// list controller
app.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $scope.orderOption = "rank";
  $scope.sortOptions = ["title", "rank"];
	$scope.currOption = "";
  $scope.isReverse = false;

  // get the list of movies from the JSON
  $http.get("data/imdb250.json").then(function(response) {
    $scope.movieList = response.data;
  });
}]);

// details controller
app.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $scope.currMovie = $routeParams.imdbID;

  // get the list of movies from the JSON
  $http.get("data/imdb250.json").then(function(response) {
    $scope.movieList = response.data;
  });
}]);

// gallery controller
app.controller('GalleryController', ['$scope', '$http', function($scope, $http) {
  $scope.currGenre = '';

  // get the list of movies from the JSON
  $http.get("data/imdb250.json").then(function(response) {
    $scope.movieList = response.data;
  });
}]);
