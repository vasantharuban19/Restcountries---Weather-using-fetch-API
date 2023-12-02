const url = "https://restcountries.com/v3.1/all";
const result = fetch(url);
result
  .then((data) => data.json())
  .then((ele) => {
    // const h1 = document.createElement("h1");
    // h1.setAttribute("id", "title");
    // h1.setAttribute("class", "text-center");
    // h1.innerHTML = `Rest Countries`;
    // document.body.append(h1);
    for (var i = 0; i < ele.length; i++) {
    //   console.log(ele[i].name);
      const div = document.createElement("div");
      div.innerHTML = `
      <br><div class="row col-lg-4 col-sm-12">
      <div class="col">
      <div class="card">
      <div class="card-header">${ele[i].name.common}</div>
      <img src="${ele[i].flags.png}" class="card-img-top" alt="...">
      <div class="card-body">
    <p class="card-title">Capital:${ele[i].capital}</p>
    <p class="card-title">Region:${ele[i].region}</p>
    <p class="card-title">Country Code:${ele[i].cca3}</p>
    <button
      type="button"
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-placement="right"
      data-bs-content= "getWeatherData('${ele[i].name.common}')"
      onclick="getWeatherData('${ele[i].name.common}')"
      
    >
      Click for weather
    </button>
</div>
  </div>
</div>

      </div>`;
      document.body.append(div);
      const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
      const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    }
  });

function getWeatherData(restCountryName){
  let key = "cbff0bef1f01d3f4c2f9595211d9557c"
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${restCountryName}&appid=${key}`
fetch(weatherUrl).then((response)=>response.json()).then((weatherData)=>{
  let weatherCountryname = weatherData.name;
  if (weatherCountryname===restCountryName){
   alert(`${weatherData.main.temp_min} && ${weatherData.main.temp_max}`)
  }
  else{
    alert("Country name do not match")
  }
})
.catch((error)=>{
  console.error("Error weather data:",error);
})
}