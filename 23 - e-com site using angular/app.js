// app.js
angular.module('ecommerceApp', [])
    .controller('ProductController', function($scope) {
        // Product data
        $scope.products = [
            { id: 1, name: 'Product 1', price: 10 },
            { id: 2, name: 'Product 2', price: 20 },
            { id: 3, name: 'Product 3', price: 30 }
        ];

        // Selected product details
        $scope.selectedProduct = null;

        // Cart
        $scope.cart = [];

        // Add product to cart
        $scope.addToCart = function(product) {
            var existingItem = $scope.cart.find(item => item.product.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.total = existingItem.quantity * existingItem.product.price;
            } else {
                $scope.cart.push({ product: product, quantity: 1, total: product.price });
            }
        };

        // Show product details
        $scope.showDetails = function(product) {
            $scope.selectedProduct = product;
        };

        // Hide product details
        $scope.hideDetails = function() {
            $scope.selectedProduct = null;
        };

        // Calculate total price in cart
        $scope.getTotalPrice = function() {
            var totalPrice = 0;
            $scope.cart.forEach(item => {
                totalPrice += item.total;
            });
            return totalPrice;
        };

        // Checkout
        $scope.checkout = function() {
            // Dummy checkout logic (can be replaced with actual logic)
            $scope.cart = [];
            $scope.checkoutComplete = true;
        };
    });
