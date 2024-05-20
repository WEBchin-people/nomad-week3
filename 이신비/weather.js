const API_KEY =""; //""안에 자신의 API_KEY넣기

function onGeoOk(position){
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch (url).then(response => response.json()).then(data => { //json은 url을 열었을 때 나오는 정보 모두를 뜻함(날씨, 온도, 위치...)
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); 
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
