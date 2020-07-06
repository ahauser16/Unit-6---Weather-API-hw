document.addEventListener("DOMContentLoaded", init);

function init(){
	//this runs when page is fully loaded
  	let {lat, lng} = getLocalWeather();
    if (lat && lng) getWeatherByLatLng(lat, lng, displayWeather);
  	//local storage
  	let data = getFromLocalStorage();
  	if (data) populateCustomCities(data);
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

function getLocalWeather(){
	//get geolocation
  	if (!"geolocation" in navigator) return {lat: null, lng: null};
  	//geolocation okay
  	//get lat and lng
  	return {lat, lng};
}

function populateCustomCities(data){
	
}

function handleGetWeatherByCity(e){
	let input = document.querySelector("input[type='text']");
  	let city = input.value;
  	let {lat, lng} = await getLatLngByCity(city);
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

async function getLatLngByCity(city){
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

function getFromLocalStorage(callback){
	
}




const key = "166a433c57516f51dfab1f7edaed8413";

async function getLatLngByCity(city){
	let lat, lng;
  	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  	await fetch(url).then(res => res.json()).then(json => {
      	{lat, lng} = json.coords;
    });
  	return {lat, lng};
}

async function getWeatherByLatLng(lat, lng){
	let data;
  	let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${key}`;
  	await fetch(url).then(res => res.json()).then(json => {
    	data = json;
    });
  	return data;
}

async function handleCustomCityClick(e){
	let city = "";
  	let {lat, lng} = await getLatLngByCity(city);
  	let data = await getWeatherByLatLng(lat, lng);
  	displayWeather(data);
}

function displayWeather(data){
	console.log(data);
}


























