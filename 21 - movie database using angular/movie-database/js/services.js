app.factory('MovieService', function($http) {
    var apiUrl = 'https://www.omdbapi.com/';
    var apiKey = 'Your_API_Key';

    return {
        searchMovies: function(query) {
            return $http.get(apiUrl, {
                params: {
                    s: query,
                    apikey: apiKey
                }
            });
        }
    };
});
