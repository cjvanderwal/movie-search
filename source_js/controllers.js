app.controller('ListController', function($scope, $http) {
  // $scope.movieSearch= "Search for movies";
  $scope.sortOptions = ["title", "rank"];
	$scope.currOption = "";

  // get the list of movies from the JSON
  $http.get("data/imdb250.json").then(function(response) {
    $scope.movieList = response.data;
  });

  // find the listed titles by the search string
  // $scope.movieFilter = function(movie) {
  //   return function(movie) {
  //     if ($scope.movieSearch === null) {
  //       return false;
  //     }
  //     return movie.title.search($scope.movieSearch) != -1
  //   };
  // };
});

app.controller('DetailsController', function($scope, $http, $routeParams) {
  $scope.currMovie = $routeParams.imdbID;

  // get the list of movies from the JSON
  $http.get("data/imdb250.json").then(function(response) {
    $scope.movieList = response.data;
  });
});

app.controller('GalleryController', function($scope, $http) {

  // get the list of movies from the JSON
  $http.get("data/imdb250.json").then(function(response) {
    $scope.movieList = response.data;
  });
});
