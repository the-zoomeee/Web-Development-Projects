// app.js
angular.module('cakeShopApp', [])
.controller('FormController', function() {
    var vm = this;
    vm.user = {};

    vm.submitForm = function(isValid) {
        if (isValid) {
            alert('Form submitted successfully!');
        } else {
            alert('Please fill out the form correctly.');
        }
    };
});
