


export default function loadForm()
{
    const content_container = document.createElement("div");
    content_container.id = "content_container"

    const searchbar_container = document.createElement("div");
    searchbar_container.id = "searchbar_container";

    const searchbar = document.createElement("input");
    searchbar.id = "searchbar";
    searchbar.type = "text";
    searchbar.placeholder = "Search city or region";

    const search_btn = document.createElement("div");
    search_btn.id = "search_btn";
    search_btn.textContent = "Search";

    searchbar_container.append(searchbar);
    searchbar_container.append(search_btn);

    const data_container = document.createElement("div");
    data_container.id = "data_container";

    const temp_container = document.createElement("div");
    temp_container.id = "temp_container";

    const temp_left_container = document.createElement("div");
    temp_left_container.id = "temp_left_container";

    const temp_right_container = document.createElement("div");
    temp_right_container.id = "temp_right_container";

    const icon_container = document.createElement("div");
    icon_container.id = "icon_container";
    icon_container.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="170" height="170"  viewBox="0 0 24 24" fill="#f9edc6" stroke="#eac73d" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';


    temp_right_container.append(icon_container);

    const temperature_container = document.createElement("div");
    temperature_container.id = "temperature_container";
    temperature_container.innerHTML = '<span id="temperature_text_container">23°</span>';

    const location_container = document.createElement("div");
    location_container.id = "location_container";
    location_container.innerHTML = '<span id="location_text_container">Surat , India</span>';

    temp_left_container.append(temperature_container);
    temp_left_container.append(location_container);

    temp_container.append(temp_left_container);
    temp_container.append(temp_right_container);




    const forecast_container = document.createElement("div");
    forecast_container.id = "forecast_container";

    const forecast_temp_container = document.createElement("div");
    forecast_temp_container.id = "forecast_temp_container";
    forecast_temp_container.innerHTML = '<span class="forecast_temp_container">21°</span>' +
        '<span class="forecast_temp_container">21°</span>' +
        '<span class="forecast_temp_container">21°</span>' +
        '<span class="forecast_temp_container">21°</span>' +
        '<span class="forecast_temp_container">21°</span>';

    const forecast_icon_container = document.createElement("div");
    forecast_icon_container.id = "forecast_icon_container";
    forecast_icon_container.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"  viewBox="0 0 24 24" fill="#f9edc6" stroke="#eac73d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"  viewBox="0 0 24 24" fill="#f9edc6" stroke="#eac73d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"  viewBox="0 0 24 24" fill="#f9edc6" stroke="#eac73d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"  viewBox="0 0 24 24" fill="#f9edc6" stroke="#eac73d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"  viewBox="0 0 24 24" fill="#f9edc6" stroke="#eac73d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';

    const forecast_day_container = document.createElement("div");
    forecast_day_container.id = "forecast_day_container";
    forecast_day_container.innerHTML = '<span>Mon </span>' +
        '<span>Mon </span>' +
        '<span>Mon </span>' +
        '<span>Mon </span>' +
        '<span>Mon </span>';

    forecast_container.append(forecast_temp_container);
    forecast_container.append(forecast_icon_container);
    forecast_container.append(forecast_day_container);

    data_container.append(temp_container);
    data_container.append(forecast_container);

    content_container.append(searchbar_container);
    content_container.append(data_container);

    document.body.append(content_container);

}