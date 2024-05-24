var app = angular.module('blogApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostController'
    })
    .when('/create', {
        templateUrl: 'views/create-post.html',
        controller: 'CreatePostController'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.factory('PostService', function() {
    var posts = [
        { title: 'First Post', content: 'This is the first post content.' },
        { title: 'Second Post', content: 'This is the second post content.' }
    ];

    return {
        getPosts: function() {
            return posts;
        },
        addPost: function(post) {
            posts.push(post);
        }
    };
});

app.controller('PostController', function($scope, PostService) {
    $scope.posts = PostService.getPosts();
});

app.controller('CreatePostController', function($scope, $location, PostService) {
    $scope.newPost = { title: '', content: '' };

    $scope.createPost = function() {
        PostService.addPost({
            title: $scope.newPost.title,
            content: $scope.newPost.content
        });

        $scope.newPost = { title: '', content: '' };
        $location.path('/');
    };
});
