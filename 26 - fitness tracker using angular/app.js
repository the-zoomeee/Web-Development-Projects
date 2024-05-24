angular.module('FitnessTrackerApp', [])
.controller('MainController', function($scope) {
    $scope.trackerData = {
        steps: 0,
        calories: 0,
        workouts: []
    };

    $scope.addWorkout = function(workout) {
        $scope.trackerData.workouts.push(workout);
        $scope.trackerData.calories += workout.calories;
        $scope.trackerData.steps += workout.steps;
        updateLocalStorage();
    };

    function updateLocalStorage() {
        localStorage.setItem('fitnessData', JSON.stringify($scope.trackerData));
    }

    function loadLocalStorage() {
        var data = localStorage.getItem('fitnessData');
        if (data) {
            $scope.trackerData = JSON.parse(data);
        }
    }

    loadLocalStorage();
});
