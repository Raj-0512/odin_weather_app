import loadForm from "./loadForm.js";
import {weatherData} from "./weatherData.js";
import displayData from "./fetchData.js";

export default function searchLocation() {
    document.getElementById("search_btn").addEventListener("click", async () => {

        const city = document.getElementById("searchbar").value;
        displayData(city);

    });
}