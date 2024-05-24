document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const city = document.getElementById('city').value;
    const apiKey = 'Your_API_Key'; // Use your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.cod === 200) {
                const weatherData = `
                    <p>City: ${data.name}</p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weather-result').innerHTML = weatherData;
            } else {
                document.getElementById('weather-result').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            document.getElementById('weather-result').innerHTML = `<p>Unable to retrieve weather data: ${error.message}</p>`;
        });
});
