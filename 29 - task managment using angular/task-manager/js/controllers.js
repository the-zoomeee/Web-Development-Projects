angular.module('taskManagerApp').controller('TaskController', function($scope) {
    $scope.tasks = [];
    $scope.newTask = {};

    // Add task
    $scope.addTask = function() {
        if ($scope.taskForm.$valid) {
            $scope.tasks.push(angular.copy($scope.newTask));
            $scope.newTask = {};
            $scope.taskForm.$setPristine();
            $scope.taskForm.$setUntouched();
        }
    };

    // Edit task
    $scope.editTask = function(task) {
        $scope.newTask = task;
    };

    // Delete task
    $scope.deleteTask = function(task) {
        const index = $scope.tasks.indexOf(task);
        if (index > -1) {
            $scope.tasks.splice(index, 1);
        }
    };
});
