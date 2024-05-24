// app/app.config.js
angular.module('libraryApp').config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/books', {
        templateUrl: 'app/views/bookList.html',
        controller: 'BookController'
    })
    .when('/books/:id', {
        templateUrl: 'app/views/bookDetail.html',
        controller: 'BookController'
    })
    .otherwise({
        redirectTo: '/books'
    });
}]);
