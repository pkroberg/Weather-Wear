//call current weather data
let lat=37.7749; // example latitude
let lon=-122.4194; // example longitude

let apiURL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e5bf64efcd979a72fe523a3c4c280da2`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });