# Weather-Wear App

Weather-Wear is a web application that provides weather information based on your location and suggests appropriate outfits for the current temperature.

## Features

- **Get Current Weather:** Click the "Get My Location" button to retrieve your current location's weather information.
- **Outfit Recommendations:** Receive outfit recommendations based on the current temperature.

## Technologies Used

- HTML
- CSS (Styled with Tailwind CSS)
- JavaScript

## How to Use

1. Clone the repository:

   git clone https://github.com/your-username/weather-wear-app.git

   open 'index.html' file in your web browser

   click 'Get My Location' button to fetch weather information an display a suitable outfit

2. Configuration

    To use this app, you need to obtain an API key from openweathermap.org. Replace the placeholder YOUR_API_KEY_HERE in the app.js file with your actual API key.

    ```javascript
    // Replace 'YOUR_API_KEY_HERE' with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=YOUR_API_KEY_HERE`;

## Contributing 

If you'd like to contribute to this project, please follow the standard GitHub fork and pull request workflow.

## Acknowledgments

Weather data provided by OpenWeatherMap API.

   
