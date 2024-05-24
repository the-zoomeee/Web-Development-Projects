app.controller('MovieController', function($scope, MovieService) {
    $scope.searchQuery = '';
    $scope.movies = [];

    $scope.searchMovies = function() {
        if ($scope.searchQuery.length > 2) {
            MovieService.searchMovies($scope.searchQuery).then(function(response) {
                $scope.movies = response.data.Search;
            }, function(error) {
                console.error('Error fetching movies', error);
            });
        }
    };
});
