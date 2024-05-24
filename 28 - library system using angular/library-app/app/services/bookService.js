// app/services/bookService.js
angular.module('libraryApp').factory('BookService', function() {
    var books = [
        { id: 1, title: 'Book 1', author: 'Author 1' },
        { id: 2, title: 'Book 2', author: 'Author 2' }
    ];

    return {
        getAllBooks: function() {
            return books;
        },
        getBookById: function(id) {
            return books.find(book => book.id == id);
        },
        addBook: function(book) {
            book.id = books.length ? books[books.length - 1].id + 1 : 1;
            books.push(book);
        },
        updateBook: function(updatedBook) {
            var index = books.findIndex(book => book.id == updatedBook.id);
            if (index !== -1) {
                books[index] = updatedBook;
            }
        },
        deleteBook: function(id) {
            var index = books.findIndex(book => book.id == id);
            if (index !== -1) {
                books.splice(index, 1);
            }
        }
    };
});
