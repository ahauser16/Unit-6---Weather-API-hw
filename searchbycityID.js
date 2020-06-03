// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="utf-8">
//   <title>Multiple AJAX</title>
// </head>

// <body>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//   <script type="text/javascript">
    // Performing GET requests to the OMDB API and logging the responses to the console
//THE ABOVE IS HTML FROM CLASS ACTIVITY AND BELOW IS THE LOGIC


//api key: 166a433c57516f51dfab1f7edaed8413

//methods to take in the class name that we want to select
// syntax --> const element = document.querySelector(".className");
const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");


const weather = {};
        unit : "celsius"

weather.temperature = {
    unit : "celsius"
}

//APP CONSTANTS AND VARS
const KELVIN = 273
//API Key
const key = "166a433c57516f51dfab1f7edaed8413";

//User's Location - before user enters City ID or Name, Zip Code or geographic coordinates we need
//to make sure geolocation services are available.
if ("gelocation" in navigator){

    //syntax: navigator.geolocation.getCurrentPosition(success[, error[, [options]])
    //navigator: represents the state and identity of the user agent.
    //getCurrentPosition(): retrieves a device's current location.
    //success(): is a callback function that takes a GeolocationPOsition object as its sole input parameter.
    navigator.geolocation.getCurrentPosition(setPosition, showError);

}else{

    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser Doesn't Support Geolocation.</p>"
}

//setPosition is a callback function that now contains the user's location 
//that takes an object as its sole param.
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    //we're declaring getWeather callback function
    getWeather(latitude, longitude);
}

function showError(error)   {

    notificationElement.style.display = "block";
    notificationElement.innerHTML=`<p> ${error.message} </p>`;
}

//request and response to/from API

function getWeather(latitude, longitude){
    //link created
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    //to send request use fetch and THEN to give the response you have to parse the [code] which is JSON
    fetch(api)  
    

    //to receive the data from the API; received the promise
    .then(function(response){
        let data = response.json();
        //at this point the data is an object with properties such as temp-->data.main.temp
        return data;
    })

    //setting properties of the weather object
    .then(function(data){
        // console.log('--------- Data -----------')

        //FILTERING DATA AND ASSETS FROM THIS POINT 
        //PROCEED WITH NEW PLAN WITH FERNANDO, ED AND ABIR

        // Grab main value for search term
        // Use search term to call spotify api
        // callSpotify()
        // console.log(data.weather[0].main)
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);

        weather.description = data.weather[0].description;

        weather.iconID = data.weather[0].icon;

        weather.city = data.name;

        weather.country - data.sys.country;

        
    })

    //then we display data to the user; the displayWeather function updates the inner HTML of our elements
    .then(function(){
        displayWeather();
    });
}



function displayWeather(){
    //e.g. icon returned from API
    iconElement.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.iconID}@2x.png"/>`;

    //e.g. 29 degrees C --> how do you type the symbol for degrees in VSC?
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;

    //e.g. Clear sky
    descElement.innerHTML = weather.description;

    //London, GB    
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

//kelvin to celsius & celsius to kelvin button 
//weather.temperature.value = 300-273

function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

//temperature conversion
tempElement.addEventListener("click", function(){

    //anticipate the API not sending data; if the user presses the conversion button above it will 
    //return an error because the temperature conversion function will be undefined.
    if(weather.temperature.value === undefined) return;

    //check to see if the value is in celsius and then convert to F
        if(weather.temperature.unit === "celsius"){
            
            let fahrenheit = celsiusToFahrenheit(weather.temperature.value);

    //math.floor function below is required to round to 86 (integer) because we might return a # such as 86.24654562456...
            fahrenheit = math.floor(fahrenheit);

            tempElement.innerHTML = `${fahrenheit}° <span>F</span>`;

    //here we need to change the unit to F given the conversion
            weather.temperature.unit = "fahrenheit";


    //check to see if the value is in fahrenheit and then convert to C
        }else{
    
    //you insert the degrees symbol by holding ALT and pressing 0176
            tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;

    //here we need to change the unit to C given the conversion
            weather.temperature.unit = "celsius";
        }
});

function success(position) {
    
    setPosition(position)
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  //takes three callbacks: (success[, error[, [options]])
  navigator.geolocation.getCurrentPosition(success, error);

  //takes in one argument; the object position has a number of properties including latitude and longitude


  //    position.coords.latitude
  //    position.coords.longitude

  //takes in one argument; the error object has two properties: error ID & message
 // error(error)
     // error.message












    












  


















//     $.ajax({
//       url: "https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy",
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);
//     });

//     $.ajax({
//       url: "https://www.omdbapi.com/?t=the+revenant&y=&plot=short&apikey=trilogy",
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);
//     });

//     $.ajax({
//       url: "https://www.omdbapi.com/?t=god+father&y=&plot=short&apikey=trilogy",
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);
//     });

//     $.ajax({
//       url: "https://www.omdbapi.com/?t=space+jam&y=&plot=short&apikey=trilogy",
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);
//     });

//     $.ajax({
//       url: "https://www.omdbapi.com/?t=boiler+room&y=&plot=short&apikey=trilogy",
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);
//     });

//     $.ajax({
//       url: "https://www.omdbapi.com/?t=inception&y=&plot=short&apikey=trilogy",
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);
//     });

//     $.ajax({
//       url: "https://www.omdbapi.com/?t=the+dark+night&y=&plot=short&apikey=trilogy",
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);
//     });
// // ---------------------------------------------------------

//     console.log("Because our AJAX requests are asynchronous, this line of code will most likely log first");
//   </script>

// </body>

// </html>
