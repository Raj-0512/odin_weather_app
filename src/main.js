
import './style.css';
import searchLocation from "./searchLocation.js";
import displayData from "./fetchData.js";
import loadDOM from "./loadDOM.js";


window.addEventListener("DOMContentLoaded" , () => {

    searchLocation();
    loadDOM();
    displayData('london');

});

