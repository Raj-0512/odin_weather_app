


export default function loadForm()
{
    const content_container = document.createElement("div");
    content_container.id = "content_container"

    const searchbar_container = document.createElement("div");
    searchbar_container.id = "searchbar_container";

    const searchbar = document.createElement("input");
    searchbar.type = "text";

    searchbar_container.append(searchbar);

    const data_container = document.createElement("div");
    data_container.id = "data_container";

    const temp_container = document.createElement("div");
    temp_container.id = "temp_container";

    const forecast_container = document.createElement("div");
    forecast_container.id = "forecast_container";

    data_container.append(temp_container);
    data_container.append(forecast_container);

    content_container.append(searchbar_container);
    content_container.append(data_container);

    document.body.append(content_container);

}