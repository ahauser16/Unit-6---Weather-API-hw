document.addEventListener("DOMContentLoaded", init);

function init(){
	//this runs when page is fully loaded
  	getLocalWeather: {
        //get geolocation information
        //let data = getWeatherByLatLng(lat, lng);
      	//displayWeather(data);
      	getWeatherByLatLng(lat, lng, displayWeather);
    }
  	getFromLocalStorage: {
    	//???
    }
  	//listen for events on button (get weather by city name)
  	document.querySelector("input[type='button']").addEventListener("click", handleGetWeatherByCity);
  	document.querySelector("input[type='text']").addEventListener("keyup", (e) => {
    	if (e.keyCode === 13) { //enter key
        	handleGetWeatherByCity(e);
        }
    });
  	/*
    	<input type="text" placeholder="City Name" />
        <input type="button" value="Get Weather" />
    */
}

function handleGetWeatherByCity(e){
	let input = document.querySelector("input[type='text']");
  	let city = input.value;
  	let {lat, lng} = getLatLngByCity(city);
  	//let data = getWeatherByLatLng(lat, lng);
  	//if all is successful,
  	//clear value of input
  	//addCustomCity(data);
  	//displayWeather(data);
  	getWeatherByLatLng(lat, lng, data => { //"splitter"
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
  	//let data = getWeatherByLatLng(lat, lng);
  	//displayWeather(data);
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
}