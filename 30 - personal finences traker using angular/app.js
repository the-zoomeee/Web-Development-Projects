var app = angular.module('financeTrackerApp', []);

app.controller('MainController', ['$scope', function($scope) {
    // Load transactions from local storage
    $scope.transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    $scope.newTransaction = {};

    // Function to add a new transaction
    $scope.addTransaction = function() {
        $scope.transactions.push({
            description: $scope.newTransaction.description,
            amount: parseFloat($scope.newTransaction.amount),
            type: $scope.newTransaction.type
        });
        $scope.newTransaction = {}; // Reset the form
        $scope.saveTransactions(); // Save transactions to local storage
    };

    // Function to save transactions to local storage
    $scope.saveTransactions = function() {
        localStorage.setItem('transactions', JSON.stringify($scope.transactions));
    };

    // Function to calculate total income
    $scope.getTotalIncome = function() {
        return $scope.transactions
            .filter(t => t.type === 'income')
            .reduce((total, t) => total + t.amount, 0);
    };

    // Function to calculate total expenses
    $scope.getTotalExpenses = function() {
        return $scope.transactions
            .filter(t => t.type === 'expense')
            .reduce((total, t) => total + t.amount, 0);
    };

    // Function to calculate net balance
    $scope.getNetBalance = function() {
        return $scope.getTotalIncome() - $scope.getTotalExpenses();
    };
}]);
