angular.module('tourismApp', [])
.controller('FormController', function($scope) {
    $scope.formData = {};

    $scope.submitForm = function() {
        if ($scope.contactForm.$valid) {
            alert('Form submitted successfully!');
        }
    };
});
