const API_KEY ="cbc16f370cdaaf4fb2b2b211507a5c59";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response =>response.json())
    .then(data => {
        // console.log(data.name,data.weather[0].main);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;

    });
}

function onGeoError(){
 alert("Cant find you. No weather for u");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);