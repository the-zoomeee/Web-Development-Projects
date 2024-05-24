angular.module('weatherApp').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<home></home>'
        })
        .when('/forecast', {
            template: '<forecast></forecast>'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
