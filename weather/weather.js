const apiKey = "0c554385122f3dd35791587545140f86";

async function getWeather() {

    const city = document.getElementById("city").value;

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if (data.cod != 200) {
        document.getElementById("weather").innerHTML =
        `<p>${data.message}</p>`;
        return;
    }

    document.getElementById("weather").innerHTML = `
        <h2>${data.name}</h2>
        <p>🥵Temperature: ${data.main.temp} °C</p>
        <p> 💧Humidity: ${data.main.humidity}%</p>
        <p> 🍃Wind: ${data.wind.speed} m/s</p>
        <p>🌥️Weather: ${data.weather[0].main}</p>
    `;
}