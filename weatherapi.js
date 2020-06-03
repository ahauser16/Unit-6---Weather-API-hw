//API Key
const key = "166a433c57516f51dfab1f7edaed8413";

const key2 = "90e328dadef6a612bdd08017e15de2fb"

//User's Location - before user enters City ID or Name, Zip Code or geographic coordinates we need
//to make sure geolocation services are available.
if ("geolocation" in navigator) {

    //syntax: navigator.geolocation.getCurrentPosition(success[, error[, [options]])
    //navigator: represents the state and identity of the user agent.
    //getCurrentPosition(): retrieves a device's current location.
    //success(): is a callback function that takes a GeolocationPOsition object as its sole input parameter.
    navigator.geolocation.getCurrentPosition(setPosition, showError);

} else {

    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser Doesn't Support Geolocation.</p>"
}

//setPosition is a callback function that now contains the user's location 
//that takes an object as its sole param.
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    //we're declaring getWeather to be called later
    getWeather(latitude, longitude);
}

function showError(error) {

    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

//request and response to/from API

function getWeather(latitude, longitude) {
    //link created
    let api = `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}`;
    //to send request use fetch and THEN to give the response you have to parse the [code] which is JSON
    fetch(api)


        //to receive the data from the API; received the promise
        .then(function (response) {
            let data = response.json();
            //at this point the data is an object with properties such as temp-->data.main.temp
            return data;
        })

        //setting properties of the weather object
        .then(function (data) {

            console.log(data);

            // Convert the temp to fahrenheit
            var tempF = Math.round((data.current.feels_like - 273.15) * 1.80 + 32);
            var tempMornF = Math.round((data.daily[0].temp.morn - 273.15) * 1.80 + 32);
            var tempDayF = Math.round((data.daily[0].temp.day - 273.15) * 1.80 + 32);
            var tempEveF = Math.round((data.daily[0].temp.eve - 273.15) * 1.80 + 32);
            var tempNightF = Math.round((data.daily[0].temp.night - 273.15) * 1.80 + 32);

            var humidity = data.daily[0].humidity;
            var description = data.daily[0].weather[0].description;
            var icon = data.current.weather[0].icon;
            var windSpeed = data.daily[0].wind_speed;
            var uvi = data.daily[0].uvi;



            // Transfer content to HTML
            $(".city").html("<h3>" + data.timezone + " Weather Details</h1>");
            $(".temp").text("Feels like: " + tempF);
            $(".tempMorn").text("Morning: " + tempMornF);
            $(".tempDay").text("Day: " + tempDayF);
            $(".tempEve").text("Evening: " + tempEveF);
            $(".tempNight").text("Night: " + tempNightF);
            $(".humidity").text("Humidity: " + humidity);
            $(".description").text("Looks like we have " + description + " today!");
            $(".icon").attr("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");
            $(".wind_speed").text("Wind Speed: " + windSpeed);
            $(".uvi").text("UV Index: " + uvi)

            console.log(icon);
            // http://openweathermap.org/img/wn/10d@2x.png


            for (var i = 1; i < 5; i++) {


                var tempF = Math.round((data.daily[i].feels_like.day - 273.15) * 1.80 + 32);
                var tempMornF = Math.round((data.daily[i].temp.morn - 273.15) * 1.80 + 32);
                var tempDayF = Math.round((data.daily[i].temp.day - 273.15) * 1.80 + 32);
                var tempEveF = Math.round((data.daily[i].temp.eve - 273.15) * 1.80 + 32);
                var tempNightF = Math.round((data.daily[i].temp.night - 273.15) * 1.80 + 32);

                var humidity = data.daily[i].humidity;
                var description = data.daily[i].weather[0].description;
                var icon = data.daily[i].weather[0].icon;
                var windSpeed = data.daily[i].wind_speed;
                var uvi = data.daily[i].uvi;

                $(".days").append(`
                    <a href="#" class="list-group-item list-group-item-action active ">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Day ${i + 1}</h5>
                      <small><img>${icon}</img></small>
                    </div>
                    <p class="mb-1 temp">Feels like ${tempF}</p>
                    <p class="mb-1">Humidity:</p>
                    <p class="mb-1">Wind SPeed:</p>
                    <p class="mb-1">UV Index: 'red object'</p>
                  </a>
                 `);
            }

            if (data.daily[0].uvi >= 0 && data.daily[0].uvi <= 2) {
                $(".uvi").css("background-color", "green");

            } else if (data.daily[0].uvi >= 3 && data.daily[0].uvi <= 5) {
                $(".uvi").css("background-color", "yellow");

            } else if (data.daily[0].uvi >= 6 && data.daily[0].uvi <= 7) {
                $(".uvi").css("background-color", "orange");

            } else if (data.daily[0].uvi >= 8 && data.daily[0].uvi <= 10) {
                $(".uvi").css("background-color", "red");

            } else { $(".uvi").css("background-color", "purple") };

        })

}

//I could not figure out how to get the City search API call (triggered by the user when they enter a submit request) to work.  The latitude & longitude API call (triggered by the user when they approve a geolocation prompt).

var city = document.querySelector("#city-form");

city.addEventListener("submit", getCityWeather);

function getCityWeather(e) {

    let api = `http://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}`;
    //to send request use fetch and THEN to give the response you have to parse the [code] which is JSON
    fetch(api)

        //to receive the data from the API; received the promise
        .then(function (response) {
            let data = response.json();
            //at this point the data is an object with properties such as temp-->data.main.temp
            return data;
        })

        //setting properties of the weather object
        .then(function (data) {

            console.log(data);
        }
        )
}
//OUTSTANDING FEATURES:
// ##### 6. search-history-w/-links

// ###### feature description: when a user clicks on a city in the search history then they are again presented with current and future conditions for that city
// - [ ] incomplete
// - issues: See issue 1 above.  Also, due to time constraints I could not research how to keep the information in local storage.

// ##### 7. dash-opens-with-last-search

// ###### feature description: when a user opens the weather dashboard they are presented with the last searched city forecast
// - [ ] incomplete
// - issues: See issue 1 above.  Also, due to time constraints I could not research how to keep the information in local storage.