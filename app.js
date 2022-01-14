function weatherDataFetch(city) {
    let key = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        console.log(data);
        drawWeather(data);
    })
    .catch(() => {
        console.log('error');
    })
}

function cityWeather(e) {
    weatherDataFetch('Tallinn');
}

function drawWeather(data) {
    let cel = Math.round(parseFloat(data.main.temp) - 273.15);
    let desc = data.weather[0].description;

    document.querySelector('#description').innerHTML = desc;
    document.querySelector('#temp').innerHTML = cel + '&deg;';
    document.querySelector('#location').innerHTML = data.name;
}

cityWeather();