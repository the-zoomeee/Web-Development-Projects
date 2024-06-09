var app = angular.module('complaintApp', []);

app.controller('ComplaintController', ['$scope', function($scope) {
    $scope.complaint = {};

    $scope.submitComplaint = function() {
        if ($scope.complaintForm.$valid) {
            alert('Complaint submitted successfully!');
            $scope.complaint = {}; // Reset the form
            $scope.complaintForm.$setPristine();
            $scope.complaintForm.$setUntouched();
        }
    };
}]);
