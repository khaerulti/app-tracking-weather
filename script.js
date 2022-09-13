const searchButton = document.querySelector('#button');
const inputKeyword = document.querySelector('.input-keyword');

searchButton.addEventListener('click', function() {

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        inputKeyword.value +
        "&appid=b7c843f843ffc0e3dc1090844488037e&units=metric"
    )
      .then((response) => response.json())
      .then((response) => {
        let hasil = document.querySelector(".hasil");

        hasil.innerHTML = `<div class="cuaca"><h2>${response.name}, ${response.sys.country}</h2>
                                <h5><span class="temp"style="margin: 5px;" >${response.main.temp}°С</span> <span class="temp" >${response.weather[0].description}</span></h5>
                                <p style="margin-bottom: 17px;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
                                <h5>Wind Speed : ${response.wind.speed} m/s</h5>
                                <h5 style="margin-bottom: 17px;">Clouds : ${response.clouds.all}%</h5>
                                <h4 style="color: #012443;">Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</h4></div>`;
      });
    inputKeyword.value = null;

})