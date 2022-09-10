function getWeather() {
    let city = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=25d9e242f7e2f0ac3889045fe2022153`)
        .then((response) => response.json())
        .then((weather) => {
            let location = weather.weather[0].main;
            let temp = weather.main.temp - 273.15;
            document.getElementById("location").innerText = location;
            document.getElementById("temp").innerText = temp;
        });
};


