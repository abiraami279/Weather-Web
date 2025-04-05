const apikey = "0354fc6f797c3a2182bc4a21c9156a32";

async function weather(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    
    const response = await fetch(apiurl);
    const data = await response.json();

    if (response.ok) {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    } else {
        document.querySelector(".city").innerHTML = "City not found 😕";
        document.querySelector(".temp").innerHTML = "-";
    }
}

function getweather() {
    const city = document.getElementById("city-name").value;
    if (city.trim() !== "") {
        weather(city);
    } else {
        alert("Please enter a city name!");
    }
}

