//call current weather data
//api key e5bf64efcd979a72fe523a3c4c280da2

let city="Davenport";
let state="Iowa";
let country=document.getElementById("country").value;
let lat='';
let lon='';
let temp=null;

let directGeocoding=`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=5&appid=e5bf64efcd979a72fe523a3c4c280da2`;

//get my location button event listener and function
document.getElementById('getLocationBtn').addEventListener('click', getLocation);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

function showPosition(position) {
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;

    // Now you can use the latitude and longitude to make a request to your weather API
    // Example:
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=e5bf64efcd979a72fe523a3c4c280da2`;
    // Make your API request here and use the results to update the DOM
    fetch(apiUrl)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            temp=jsObject.main.temp;
            console.log("Current Temperature: "+temp+" \u00B0F");
            document.getElementById('current-temp').textContent="Current Temperature: "+temp+" \u00B0F";
        })
        .catch((error) => {
            console.log('Error:', error);
        });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('User denied the request for geolocation.');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable.');
            break;
        case error.TIMEOUT:
            alert('The request to get user location timed out.');
            break;
        case error.UNKNOWN_ERROR:
            alert('An unknown error occurred.');
            break;
    }
}

//event listener for submit button
document.getElementById("submit").addEventListener("click", function () {
    city=document.getElementById("city").value;
    state=document.getElementById("state").value;
    country=document.getElementById("country").value;
    directGeocoding=`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=5&appid=e5bf64efcd979a72fe523a3c4c280da2`;
    console.log(directGeocoding);
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
                    temp=jsObject.main.temp;
                    console.log("Current Temperature: "+temp+" \u00B0F");
                    document.getElementById('current-temp').textContent="Current Temperature: "+temp+" \u00B0F";
                })
                .catch((error) => {
                    console.log('Error:', error);
                });
        })
        .catch((error) => {
            console.log('Error:', error);
        });
});