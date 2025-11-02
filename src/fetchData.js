
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

        updateTodayWeather(data);
        updateForecast(data);

    }
    catch (error)
    {
        console.error(error);
    }
}

function updateTodayWeather(data)
{
    const temp = document.getElementById("temperature_container");
    temp.innerHTML = `<span id="temperature_text_container">${data.currentConditions.temp}°</span>`;

    const icon = document.getElementById("icon_container");
    if(data.currentConditions.icon === "cloudy" || data.currentConditions.icon === "partly-cloudy-day" ||
        data.currentConditions.icon === "partly-cloudy-night" ||  data.currentConditions.icon === "wind"
        || data.currentConditions.icon === "fog")
    {
        icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 24 24" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-icon lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>';
    }
    else if(data.currentConditions.icon === "clear-day" || data.currentConditions.icon === "clear-night" )
    {
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="170" height="170"  viewBox="0 0 24 24" fill="#f9edc6" stroke="#eac73d" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
    }
    else if(data.currentConditions.icon === "rain" || data.currentConditions.icon === "snow")
    {
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 24 24" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-rain-icon lucide-cloud-rain"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/></svg>`
    }
    const city = document.getElementById("location_container");

    const capitalizedLocation = data.address
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    city.innerHTML = `<span id="location_text_container">${capitalizedLocation}</span>`;
}

function updateForecast(data)
{
    const forecast_temp = document.getElementById("forecast_temp_container");
    forecast_temp.innerHTML = `<span class="forecast_temp_container">${data.days[1].temp}°</span>` +
        `<span class="forecast_temp_container">${data.days[2].temp}°</span>` +
        `<span class="forecast_temp_container">${data.days[3].temp}°</span>` +
        `<span class="forecast_temp_container">${data.days[4].temp}°</span>` +
        `<span class="forecast_temp_container">${data.days[5].temp}°</span>`;

    const forecast_icon = document.getElementById("forecast_icon_container");
    forecast_icon.innerHTML = "";
    for(let i=1; i<6; i++)
    {
        if(data.days[i].icon === "cloudy" || data.days[i].icon === "partly-cloudy-day"
            || data.days[i].icon === "partly-cloudy-night" || data.days[i].icon === "wind"
            || data.days[i].icon === "fog")
        {
            let tempIcon =
                `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="#F8FAFC"
                         stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-cloud-icon lucide-cloud">
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                    </svg>`;
            forecast_icon.innerHTML += tempIcon;
        }
        else if(data.days[i].icon === "rain" || data.days[i].icon === "snow")
        {
            let tempIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-rain-icon lucide-cloud-rain"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/></svg>`;
            forecast_icon.innerHTML += tempIcon;
        }
        else if(data.days[i].icon === "clear-day" || data.days[i].icon === "clear-night")
        {
            let tempIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"  viewBox="0 0 24 24" fill="#f9edc6" stroke="#eac73d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
            forecast_icon.innerHTML += tempIcon;
        }

    }

    const forecast_day = document.getElementById("forecast_day_container");
    forecast_day.innerHTML = ` <span>${new Date(data.days[1].datetime).toLocaleDateString('en-US', {weekday: 'short'})}</span>` +
        `<span>${new Date(data.days[2].datetime).toLocaleDateString('en-US', { weekday: 'short' })} </span>` +
        `<span>${new Date(data.days[3].datetime).toLocaleDateString('en-US', { weekday: 'short' })} </span>` +
        `<span>${new Date(data.days[4].datetime).toLocaleDateString('en-US', { weekday: 'short' })} </span>` +
        `<span>${new Date(data.days[5].datetime).toLocaleDateString('en-US', { weekday: 'short' })} </span>`;
}
