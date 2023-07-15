const locationForm = document.getElementById("locationForm");
const locationInput = document.getElementById("locationInput");
const weatherInfo = document.getElementById("weatherInfo");

locationForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const location = locationInput.value;
  getWeather(location);
});

function getWeather(location) {
  const apiKey = "1c269de9d5c449699c880225231507"; 
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.current.temp_c;
      const weatherDescription = data.current.condition.text;

      weatherInfo.textContent = `Current ${location} temprature is: ${temperature}°C, ${weatherDescription}`;
    })
    .catch((error) => {
      console.log("Error:", error);
      weatherInfo.textContent = "Your search is not found!";
    });
}
