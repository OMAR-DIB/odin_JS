import "./style.css";

const form = document.getElementById('weather-form');
const weatherInfo = document.getElementById('weather-info');
const gifContainer = document.getElementById('gif-container');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    try {
        // Fetch weather data
        const weatherResponse = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=DW3RBXHNHD36S5TWTD9Y55T4J&contentType=json`);
        const weatherData = await weatherResponse.json();

        const condition = weatherData.currentConditions.conditions;
        const temp = weatherData.currentConditions.temp;


        weatherInfo.innerHTML = `<h2>${city}</h2><p>${condition}, ${temp}°C</p>`;
        document.body.style.backgroundColor = temp > 12 ? '#FFD700' : '#ADD8E6';

        // Fetch GIF
        const giphyResponse = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=PgYJ37kFuhwGdqeLOZfeWWuQYWy1x6r1&s=${condition}`);
        const giphyData = await giphyResponse.json();


        gifContainer.innerHTML = '';
        const image = document.createElement('img');
        image.src = giphyData.data.images.original.url;


        gifContainer.appendChild(image);

    } catch (error) {
        weatherInfo.innerHTML = 'Error fetching weather data';
        console.error(error);
    }
});
