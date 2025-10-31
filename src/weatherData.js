import displayData from "./fetchData.js";

export const weatherData = {};

export async function getData(data)
{
    if (!data || !data.currentConditions || !data.days) return;




    for (let i = 1; i <= 5; i++) {
        const day = data.days[i];
        weatherData[`day${i}_temp`] = day.temp;
        weatherData[`day${i}_day`] = new Date(day.datetime).toLocaleDateString('en-US', { weekday: 'short' });

    }

}

