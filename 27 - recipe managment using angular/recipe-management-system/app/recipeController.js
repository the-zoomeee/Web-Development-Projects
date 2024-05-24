app.controller('RecipeListController', function($scope, RecipeService) {
  $scope.recipes = RecipeService.getRecipes();

  $scope.deleteRecipe = function(id) {
    RecipeService.deleteRecipe(id);
    $scope.recipes = RecipeService.getRecipes();
  };
});

app.controller('RecipeDetailController', function($scope, $routeParams, RecipeService, $location) {
  var recipeId = $routeParams.id;
  $scope.recipe = RecipeService.getRecipeById(recipeId);
  
  $scope.saveRecipe = function() {
    RecipeService.saveRecipe($scope.recipe);
    $location.path('/recipes'); // Redirect to /recipes after saving
  };
});

