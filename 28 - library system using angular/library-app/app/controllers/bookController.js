// app/controllers/bookController.js
angular.module('libraryApp').controller('BookController', ['$scope', '$routeParams', 'BookService', function($scope, $routeParams, BookService) {
    $scope.books = BookService.getAllBooks();
    
    if ($routeParams.id) {
        $scope.book = BookService.getBookById($routeParams.id);
    } else {
        $scope.book = {};
    }

    $scope.addBook = function() {
        BookService.addBook($scope.book);
        $scope.book = {};
        $scope.books = BookService.getAllBooks();
    };

    $scope.updateBook = function() {
        BookService.updateBook($scope.book);
        $scope.books = BookService.getAllBooks();
    };

    $scope.deleteBook = function(id) {
        BookService.deleteBook(id);
        $scope.books = BookService.getAllBooks();
    };
}]);
