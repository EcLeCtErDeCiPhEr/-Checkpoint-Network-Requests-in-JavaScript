document.getElementById("fetch-weather").addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    fetchWeather(city);
});

async function fetchWeather(city) {
    const apiKey = "7b22d6fd181c0c787a2c38f181c6f04a"; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("City not found");
        
        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        document.getElementById("weather-info").innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const weatherHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Condition: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
    document.getElementById("weather-info").innerHTML = weatherHTML;
}
