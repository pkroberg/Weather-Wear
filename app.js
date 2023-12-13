//call current weather data
//api key e5bf64efcd979a72fe523a3c4c280da2

let lat='';
let lon='';
let description='';
//get my location button event listener and function
document.getElementById('getLocationBtn').addEventListener('click', getLocation);

//capitalize description
function capitalizeWords(str) {
    return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}

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
            description=capitalizeWords(jsObject.weather[0].description.toString());
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

            //change the source of the image based on the temperature
            function changeImage() {
                if (temp<=32) {
                    document.getElementById('outfit').src='pics/freezingMan.jpg';
                } else if (temp>32&&temp<=50) {
                    document.getElementById('outfit').src='pics/coldMan.jpg';
                } else if (temp>50&&temp<=70) {
                    document.getElementById('outfit').src='pics/chillyMan.jpg';
                } else if (temp>70&&temp<=85) {
                    document.getElementById('outfit').src='pics/niceMan.jpg';
                } else if (temp>85) {
                    document.getElementById('outfit').src='pics/hotMan.jpg';
                }
            }
            changeImage();
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
