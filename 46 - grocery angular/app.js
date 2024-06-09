angular.module('groceryApp', [])
    .controller('GroceryController', ['$scope', function($scope) {
        $scope.groceryList = [];

        $scope.newItem = {
            name: '',
            quantity: 1
        };

        $scope.addGroceryItem = function() {
            if ($scope.groceryForm.$valid) {
                $scope.groceryList.push({
                    name: $scope.newItem.name,
                    quantity: $scope.newItem.quantity
                });

                // Reset form
                $scope.newItem.name = '';
                $scope.newItem.quantity = 1;
                $scope.groceryForm.$setPristine();
                $scope.groceryForm.$setUntouched();
            }
        };
    }]);
