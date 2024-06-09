angular.module('appointmentApp', [])
.controller('FormController', ['$scope', function($scope) {
    $scope.formData = {};

    $scope.submitForm = function(isValid) {
        if (isValid) {
            alert('Form submitted successfully!');
            // You can add your form submission logic here
        } else {
            alert('Please correct the errors in the form.');
        }
    };
}]);
