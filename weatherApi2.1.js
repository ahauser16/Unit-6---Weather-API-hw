//API Key
const key = "166a433c57516f51dfab1f7edaed8413";

document.addEventListener("DOMContentLoaded", init);

function init(){
	//this runs when page is fully loaded
  	getLocalWeather: {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(setPosition, showError);
        } else {
            notificationElement.style.display = "block";
            notificationElement.innerHTML = "<p>Browser Doesn't Support Geolocation.</p>"
        }        
        let data = getWeatherByLatLng(lat, lng);
          
        displayWeather(data);

      	getWeatherByLatLng(lat, lng, displayWeather);
    }
  	getFromLocalStorage: {
    	//???
    }
  	//listen for events on button (get weather by city name)
  	document.querySelector("input[type='button']").addEventListener("click", handleGetWeatherByCity);
  	document.querySelector("input[type='text']").addEventListener("keyup", (e) => {
    	if (e.keyCode === key) {
        	handleGetWeatherByCity(e);
        }
    });
  	/*
    	<input type="text" placeholder="City Name" />
        <input type="button" value="Get Weather" />
    */
}

//============================================
//===============OLD CODE BELOW
// function getWeatherByLatLng(lat, lng, displayWeather) {
//     //link created
//     let api = `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}`;
//     //to send request use fetch and THEN to give the response you have to parse the [code] which is JSON
//     fetch(api)
//         //to receive the data from the API; received the promise
//         .then(function (response) {
//             let data = response.json();
//             //at this point the data is an object with properties such as temp-->data.main.temp
//             return data;
//         })

//         //setting properties of the weather object
//         .then(displayWeather);
// }

//===============OLD CODE ABOVE
//============================================

function handleGetWeatherByCity(e){
	let input = document.querySelector("input[type='text']");
  	let city = input.value;
  	let {lat, lng} = getLatLngByCity(city);
      
    let data = getWeatherByLatLng(lat, lng);
  	if (all is successful){
          clear value of input;
      }

   	getWeatherByLatLng(lat, lng, data => { 
    	addCustomCity(data);
      	displayWeather(data);
    });
}

function addCustomCity(data){

      //check for duplicates
      
    //localStorage
    
      //add button to custom city list
      
      //add button click listener
      
  	//add lat/lng data to button & localstorage
}

function handleCustomCityClick(e){

    //get lat/lng data from button
    
      let data = getWeatherByLatLng(lat, lng);
      
      displayWeather(data);
      
  	getWeatherByLatLng(lat, lng, displayWeather);
}

function getLatLngByCity(city){
    
    //api get request (data)
      
    return data.coords;
}

function getWeatherByLatLng(lat, lng, callback){
  	if ("function" !== typeof callback){
    	console.error("Not a function", callback);
      	callback = ()=>{};
    }
  	let url = `&lat=${lat}&lng=${lng}`;
	//api get reqest
  	fetch(url)
  	//then convert to JSON
  	.then(res => res.json())
  	//return data;
  	.then(callback);
}

function displayWeather(data){
    
    //output
    /

//TOP//                         //BOTTOM//main.humidity

// let humidity=(data.daily[0])?data.daily[0].humidity:data.main.humidity;
// console.log(humidity);
 
//   let TOP ENDPOINT = TOP START POINT ? TOP FULL PATH  : BOTTOM FULL PATH

// let feels_like=data.daily[0]?data.current.feels_like:data.main.feels_like;
    

    
    
//      let description=data.daily[0].weather[0]?data.daily[0].weather[0].description:data.weather[0].description;


//  let icon=data.current.weather[0]
    
//         // Convert the temp to fahrenheit
//     var tempF = Math.round((feels_like - 273.15) * 1.80 + 32);
//     var tempMornF = Math.round((data.daily[0].temp.morn - 273.15) * 1.80 + 32);
//     var tempDayF = Math.round((data.daily[0].temp.day - 273.15) * 1.80 + 32);
//     var tempEveF = Math.round((data.daily[0].temp.eve - 273.15) * 1.80 + 32);
//     var tempNightF = Math.round((data.daily[0].temp.night - 273.15) * 1.80 + 32);

//     // var humidity = data.daily[0].humidity;
//     var description = data.daily[0].weather[0].description;
//     var icon = data.current.weather[0].icon;
//     var windSpeed = data.daily[0].wind_speed;
//     var uvi = data.daily[0].uvi;



//     // Transfer content to HTML
//     $(".city").html("<h3>" + data.timezone + " Weather Details</h1>");
//     $(".temp").text("Feels like: " + tempF);
//     $(".tempMorn").text("Morning: " + tempMornF);
//     $(".tempDay").text("Day: " + tempDayF);
//     $(".tempEve").text("Evening: " + tempEveF);
//     $(".tempNight").text("Night: " + tempNightF);
//     $(".humidity").text("Humidity: " + humidity);
//     $(".description").text("Looks like we have " + description + " today!");
//     $(".icon").attr("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");
//     $(".wind_speed").text("Wind Speed: " + windSpeed);
//     $(".uvi").text("UV Index: " + uvi)

//     for (var i = 1; i < 5; i++) {


//         var tempF = Math.round((data.daily[i].feels_like.day - 273.15) * 1.80 + 32);
//         var tempMornF = Math.round((data.daily[i].temp.morn - 273.15) * 1.80 + 32);
//         var tempDayF = Math.round((data.daily[i].temp.day - 273.15) * 1.80 + 32);
//         var tempEveF = Math.round((data.daily[i].temp.eve - 273.15) * 1.80 + 32);
//         var tempNightF = Math.round((data.daily[i].temp.night - 273.15) * 1.80 + 32);

//         var humidity = data.daily[i].humidity;
//         var description = data.daily[i].weather[0].description;
//         var icon = data.daily[i].weather[0].icon;
//         var windSpeed = data.daily[i].wind_speed;
//         var uvi = data.daily[i].uvi;

//         $(".days").append(`
//             <a href="#" class="list-group-item list-group-item-action active ">
//             <div class="d-flex w-100 justify-content-between">
//               <h5 class="mb-1">Day ${i + 1}</h5>
//               <small><img>${icon}</img></small>
//             </div>
//             <p class="mb-1 temp">Feels like ${tempF}</p>
//             <p class="mb-1">Humidity:</p>
//             <p class="mb-1">Wind SPeed:</p>
//             <p class="mb-1">UV Index: 'red object'</p>
//           </a>
//          `);
//     }

//     if (data.daily[0].uvi >= 0 && data.daily[0].uvi <= 2) {
//         $(".uvi").css("background-color", "green");

//     } else if (data.daily[0].uvi >= 3 && data.daily[0].uvi <= 5) {
//         $(".uvi").css("background-color", "yellow");

//     } else if (data.daily[0].uvi >= 6 && data.daily[0].uvi <= 7) {
//         $(".uvi").css("background-color", "orange");

//     } else if (data.daily[0].uvi >= 8 && data.daily[0].uvi <= 10) {
//         $(".uvi").css("background-color", "red");

//     } else { $(".uvi").css("background-color", "purple") };

}
