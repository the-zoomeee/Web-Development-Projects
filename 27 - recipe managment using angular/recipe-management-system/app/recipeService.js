app.factory('RecipeService', function() {
  var recipes = [
    { id: 1, name: 'Spaghetti Bolognese', ingredients: 'Spaghetti, Meat, Tomato Sauce', instructions: 'Boil spaghetti. Cook meat. Mix with sauce.' },
    { id: 2, name: 'Chicken Curry', ingredients: 'Chicken, Curry Paste, Coconut Milk', instructions: 'Cook chicken. Add curry paste and coconut milk.' }
  ];

  return {
    getRecipes: function() {
      return recipes;
    },
    getRecipeById: function(id) {
      return recipes.find(recipe => recipe.id == id);
    },
    saveRecipe: function(recipe) {
      var existingRecipe = recipes.find(r => r.id == recipe.id);
      if (existingRecipe) {
        Object.assign(existingRecipe, recipe);
      } else {
        recipe.id = recipes.length + 1;
        recipes.push(recipe);
      }
    },
    deleteRecipe: function(id) {
      recipes = recipes.filter(recipe => recipe.id != id);
    }
  };
});
