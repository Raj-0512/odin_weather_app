
export default function loadDOM()
{

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

    temp_right_container.append(icon_container);

    const temperature_container = document.createElement("div");
    temperature_container.id = "temperature_container";

    const location_container = document.createElement("div");
    location_container.id = "location_container";

    temp_left_container.append(temperature_container);
    temp_left_container.append(location_container);

    temp_container.append(temp_left_container);
    temp_container.append(temp_right_container);


    const forecast_container = document.createElement("div");
    forecast_container.id = "forecast_container";

    const forecast_temp_container = document.createElement("div");
    forecast_temp_container.id = "forecast_temp_container";


    const forecast_icon_container = document.createElement("div");
    forecast_icon_container.id = "forecast_icon_container";

    const forecast_day_container = document.createElement("div");
    forecast_day_container.id = "forecast_day_container";

    forecast_container.append(forecast_temp_container);
    forecast_container.append(forecast_icon_container);
    forecast_container.append(forecast_day_container);

    data_container.append(temp_container);
    data_container.append(forecast_container);


    document.getElementById("content_container").append(data_container);


}