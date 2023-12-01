//call current weather data
//api key e5bf64efcd979a72fe523a3c4c280da2
let city="Fort Collins";
let state="Colorado";
let country="USA";
let lat='';
let lon='';

let directGeocoding=`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=5&appid=e5bf64efcd979a72fe523a3c4c280da2`;

fetch(directGeocoding)
    .then((response) => response.json())
    .then((jsObject) => {
        let lat=jsObject[0].lat;
        let lon=jsObject[0].lon;
        console.log("Latitude:", lat);
        console.log("Longitude:", lon);

        let currentWeatherData='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=imperial&appid=e5bf64efcd979a72fe523a3c4c280da2'

        fetch(currentWeatherData)
            .then((response) => response.json())
            .then((jsObject) => {
                console.log(jsObject);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    })
    .catch((error) => {
        console.log('Error:', error);
    });