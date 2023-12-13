//call current weather data
//api key e5bf64efcd979a72fe523a3c4c280da2

let lat='';
let lon='';
let description='';
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
            feels_like=jsObject.main.feels_like;
            temp_min=jsObject.main.temp_min;
            temp_max=jsObject.main.temp_max;
            description=jsObject.weather[0].description.toString();
            console.log("Current Temperature: "+temp+" \u00B0F");
            console.log("Feels Like: "+feels_like+" \u00B0F");
            console.log("Min: "+temp_min+" \u00B0F");
            console.log("Max: "+temp_max+" \u00B0F");
            console.log("Description: "+description);
            document.getElementById('current-temp').textContent="Current Temp: "+temp+" \u00B0F";
            document.getElementById('feelsLike').textContent="Feels Like: "+feels_like+" \u00B0F";
            document.getElementById('tempMin').textContent="Minimum Temp: "+temp_min+" \u00B0F";
            document.getElementById('tempMax').textContent="Maxiumum Temp: "+temp_max+" \u00B0F";
            document.getElementById('description').textContent="Description: "+description;
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