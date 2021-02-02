import { fetchWeatherData } from "./apiCall.js";

const userInputSubmitButton = document.querySelector("#userInputSubmit");
userInputSubmitButton.addEventListener("click", () => {
    let city = document.querySelector("#userInput").value;
    fetchWeatherData(city);
});