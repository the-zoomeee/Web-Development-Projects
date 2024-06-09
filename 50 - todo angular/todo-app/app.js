var app = angular.module('todoApp', []);

app.controller('TodoController', ['$scope', function($scope) {
    $scope.tasks = [
        { text: 'Learn AngularJS' },
        { text: 'Build a To-do App' }
    ];

    $scope.addTask = function() {
        if ($scope.newTask) {
            $scope.tasks.push({ text: $scope.newTask });
            $scope.newTask = '';
        }
    };

    $scope.deleteTask = function(index) {
        $scope.tasks.splice(index, 1);
    };
}]);
