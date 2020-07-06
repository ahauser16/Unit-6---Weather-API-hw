;(()=>{

const key = "166a433c57516f51dfab1f7edaed8413";

document.addEventListener("DOMContentLoaded", init);

function init(){
	document.querySelector("header input[type='button']").addEventListener("click", handleCustomCityClick);
}

async function getLatLngByCity(cityName){
	let lat, lng, city;
  	let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
  	await fetch(url).then(res => res.json()).then(json => {
		console.log(json);
      	lat = json.coord.lat;
		lng = json.coord.lon;
      	city = json.name;
    });
  	return {lat, lng, city};
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
	let cityName = document.querySelector("header input").value.trim();
	if (!cityName) return;
  	let {lat, lng, city} = await getLatLngByCity(cityName);
	console.log(lat, lng, city);
  	addCustomCity(lat, lng, city);
  	let data = await getWeatherByLatLng(lat, lng);
  	displayWeather(data);
}

function addCustomCity(lat, lng, city){
	//when we deal with localStorage, make sure it's not a dupe
  	let html = `<button data-lat="${lat}" data-lng="${lng}">${city}</button>`;
  	let ul = document.querySelector("header ul");
  	ul.innerHTML += html;
  	ul.querySelectorAll("button").forEach(button => button.addEventListener("click", handleSavedCityClick));
}

async function handleSavedCityClick(e){
	let button = e.target;
  	let lat = button.getAttribute("data-lat");
  	let lng = button.getAttribute("data-lng");
  	let data = await getWeatherByLatLng(lat, lng);
  	displayWeather(data);
}

function displayWeather(data){
  	console.log(data);
	document.querySelector("output").innerHTML = `
		<h1>${data.current.weather[0].description}</h1>
	`;
}

})();
