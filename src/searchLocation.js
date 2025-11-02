
import displayData from "./fetchData.js";

export default function searchLocation() {

    createSearchbar();

    document.getElementById("search_btn").addEventListener("click", async () => {

        const city = document.getElementById("searchbar").value;
        displayData(city);

    });
}

function createSearchbar()
{
    const content_container = document.createElement("div");
    content_container.id = "content_container";

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

    content_container.append(searchbar_container);
    document.body.append(content_container);

}