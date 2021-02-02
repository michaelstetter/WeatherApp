export const fetchWeatherData = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=cb43bc60a1cf05b38ad95f0851ba0cf2`)
    .then(response => response.json())
    .then((json) => {
        let temperature = document.querySelector("#temperature")
        temperature.textContent = `The temperature in ${city} is ${json.main.temp}`;

        let weather = document.querySelector("#weather");
        weather.textContent = json.weather[0].main;

        let weatherDescription = document.querySelector("#weatherDescription");
        weatherDescription.textContent = json.weather[0].description;

        console.log(json);
    });
}