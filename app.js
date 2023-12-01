//call current weather data
//api key e5bf64efcd979a72fe523a3c4c280da2
let city="Fort Collins";
let state="Colorado";
let country="USA";

let apiURL=`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=5&appid=e5bf64efcd979a72fe523a3c4c280da2`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let latitude=jsObject[0].lat;
        let longitude=jsObject[0].lon;
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
    });