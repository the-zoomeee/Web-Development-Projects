angular.module('weatherApp').component('forecast', {
    templateUrl: 'app/components/forecast/forecast.template.html',
    controller: ['$http', function($http) {
        var ctrl = this;
        ctrl.weatherData = null;
        ctrl.city = "Pune"; // default city

        ctrl.getWeather = function() {
            const apiKey = 'Your_API_Key';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ctrl.city}&appid=${apiKey}&units=metric`;

            $http.get(apiUrl).then(function(response) {
                ctrl.weatherData = response.data;
            }).catch(function(error) {
                console.error('Error fetching weather data:', error);
            });
        };

        ctrl.getWeather();
    }]
});
