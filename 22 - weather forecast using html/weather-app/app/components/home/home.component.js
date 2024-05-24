angular.module('weatherApp').component('home', {
    templateUrl: 'app/components/home/home.template.html',
    controller: function() {
        this.message = "Welcome to the Weather Forecast App!";
    }
});
