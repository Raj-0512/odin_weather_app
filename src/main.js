import loadForm from "./loadForm.js";
const API_KEY = 'N7USW3XXKWACWRR8GENG7RDGE';
import './style.css';

window.addEventListener("DOMContentLoaded" , () => {
    loadForm();
});

async function fetchData(location) {

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&contentType=json&key=${API_KEY}`;
    try {
        const res = await fetch(url);
        return await res.json();

    }
    catch (err) {
        console.error("Fetch failed:", err.message);
    }
}

async function displayData()
{
    try
    {
        const data = await fetchData('surat');
        console.log(data);
    }
    catch (error)
    {
        console.error(error);
    }
}

await displayData();
