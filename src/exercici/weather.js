const formData = document.getElementById('weatherForm');

weatherForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Obtenir les dades del formulari.
    const formData = {
        city: city = document.getElementById('city').value,
        country: country = document.getElementById('country').value,
    }

    // Validem que els camps no estiguin buits.
    if (!city || !country) {
        alert('Tots els camps són obligatoris.');
        return;
    }

    // Realitzem la petició a la API per obtenir les dades meteorològiques.
    const apiKey = '3b4fb77f15164d14be1144803241004';

    try {
        const dataToday = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city},${country}`)
        const dataTomorrow = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city},${country}.days=2`);

        const responseToday = await dataToday.json();
        const responseTomorrow = await dataTomorrow.json();

        if (!responseToday || !responseTomorrow) {
            alert('No s\'han pogut obtenir les dades meteorològiques.');
            return;
        } else {
            const weatherDataToday = responseToday.current;
            const weatherDataTomorrow = responseTomorrow.forecast.forecastday[0].day;

            // Mostrem les dades meteorològiques.
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h1>Weather Information</h1>
                <h2>${city}, ${country}</h2>
                <p>Temperatura avui: ${weatherDataToday.temp_c} ºC</p>
                <p>Condicions avui: ${weatherDataToday.condition.text}</p>
                <img src="${weatherDataToday.condition.icon}" alt="${weatherDataToday.condition.text}">  
                <h2>Tomorrow</h2>              
                <p>Temperatura demà: ${weatherDataTomorrow.avgtemp_c} ºC</p>
                <p>Condicions demà: ${weatherDataTomorrow.condition.text}</p>
                <img src="${weatherDataTomorrow.condition.icon}" alt="${weatherDataTomorrow.condition.text}">                
            `;
        }
    } catch (error) {
        console.error(error);
    }
});