"use strict";
const button = document.querySelector('#nextJokeBtn');
const jokeContainer = document.querySelector('.card-joke');
const weatherContainer = document.querySelector('.weather-info');
const options = {
    headers: {
        'Accept': 'application/json'
    }
};
const reportAcudits = [];
if (button) {
    button.addEventListener('click', newJoke);
}
function cleanEmojis() {
    const emojis = document.querySelectorAll('input[name="emoji"]');
    emojis.forEach(emoji => emoji.checked = false);
}
function pushReport(joke) {
    const selectedEmoji = document.querySelector('input[name="emoji"]:checked');
    const score = selectedEmoji ? parseInt(selectedEmoji.value) : 0;
    const newReport = {
        joke: joke,
        score: score,
        date: new Date().toISOString()
    };
    reportAcudits.push(newReport);
    console.log("Report acudit:", reportAcudits);
}
function newJoke() {
    fetch("https://icanhazdadjoke.com/", options)
        .then((res) => res.json())
        .then((data) => {
        if (jokeContainer) {
            jokeContainer.innerText = data.joke;
            pushReport(data.joke);
            cleanEmojis();
        }
    })
        .catch((error) => {
        console.error('Error: sorry no more jokes', error);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    newJoke();
});
function weatherEmoji(weatherCode) {
    switch (weatherCode) {
        case 0: return "☀";
        case 1: return "🌤";
        case 2: return "🌤☁";
        case 3: return "☁";
        case 45: return "🌫";
        case 48: return "🌫🌫";
        case 51: return "💧";
        case 53: return "💧💧";
        case 55: return "💧💧💧";
        case 56: return "☂";
        case 57: return "☔";
        case 61: return "🌧";
        case 63: return "🌧🌧";
        case 65: return "🌧🌧🌧";
        case 66: return "🌬🌧";
        case 67: return "🌬🌧🌧";
        case 71: return "❄";
        case 73: return "❄🌨";
        case 75: return "❄❄🌨";
        case 77: return "❄🌨🌨";
        case 80: return "☂⛈";
        case 81: return "☔⛈";
        case 82: return "🌧⛈";
        case 85: return "🌨🌨";
        case 86: return "🌨🌨🌨";
        case 95: return "⛈⛈";
        case 96: return "⛈⛈⛈";
        case 99: return "⛈⛈⛈";
        default: return "";
    }
}
function getWeather() {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=41.3888&longitude=2.159&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
        .then(res => res.json())
        .then(data => {
        console.log("Weather data:", data);
        if (weatherContainer) {
            const currentWeather = data.current_weather;
            const temperature = currentWeather.temperature;
            const weatherCode = currentWeather.weathercode;
            const emoji = weatherEmoji(weatherCode);
            weatherContainer.innerHTML = `
                    <b>Weather in Barcelona</b>
                    <p>${emoji} ${temperature} °C</p>
                `;
        }
    })
        .catch(error => console.error("Error fetching weather data:", error));
}
getWeather();
