import {getData} from "./weatherData.js";

const API_KEY = 'N7USW3XXKWACWRR8GENG7RDGE';

async function fetchData(location) {

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`;
    try {
        const res = await fetch(url);
        return await res.json();

    }
    catch (err) {
        console.error("Fetch failed:", err.message);
    }
}

export default async function displayData(location)
{
    try
    {
        const data = await fetchData(location);
        console.log(data);
        await getData(data);

        const temp = document.getElementById("temperature_container");
        temp.innerHTML = `<span id="temperature_text_container">${data.currentConditions.temp}°</span>`;

        const city = document.getElementById("location_container");
        const capitalizedLocation = data.address
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        city.innerHTML = `<span id="location_text_container">${capitalizedLocation}</span>`;




        const forecast_temp = document.getElementById("forecast_temp_container");
        forecast_temp.innerHTML = `<span class="forecast_temp_container">${data.days[1].temp}°</span>` +
            `<span class="forecast_temp_container">${data.days[2].temp}°</span>` +
            `<span class="forecast_temp_container">${data.days[3].temp}°</span>` +
            `<span class="forecast_temp_container">${data.days[4].temp}°</span>` +
            `<span class="forecast_temp_container">${data.days[5].temp}°</span>`;

        const forecast_day = document.getElementById("forecast_day_container");
        forecast_day.innerHTML = `<span>${new Date(data.days[1].datetime).toLocaleDateString('en-US', { weekday: 'short' })} </span>` +
            `<span>${new Date(data.days[2].datetime).toLocaleDateString('en-US', { weekday: 'short' })} </span>` +
            `<span>${new Date(data.days[3].datetime).toLocaleDateString('en-US', { weekday: 'short' })} </span>` +
            `<span>${new Date(data.days[4].datetime).toLocaleDateString('en-US', { weekday: 'short' })} </span>` +
            `<span>${new Date(data.days[5].datetime).toLocaleDateString('en-US', { weekday: 'short' })} </span>`;
        return data;
    }
    catch (error)
    {
        console.error(error);
    }
}


