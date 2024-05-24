var app = angular.module('recipeApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/recipes', {
      templateUrl: 'views/recipeList.html',
      controller: 'RecipeListController'
    })
    .when('/recipes/:id', {
      templateUrl: 'views/recipeDetail.html',
      controller: 'RecipeDetailController'
    })
    .otherwise({
      redirectTo: '/recipes'
    });
});
