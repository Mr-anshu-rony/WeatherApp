
let lon; 
let lat; 

let temperature = document.querySelector(".temp"); 

let summary = document.querySelector(".summary"); 

let loc = document.querySelector(".location"); 

let icon = document.querySelector(".icon"); 
const kelvin = 273; 

  

window.addEventListener("load", () => { 

  if (navigator.geolocation) { 

    navigator.geolocation.getCurrentPosition((position) => { 

      console.log(position); 

      lon = position.coords.longitude; 

      lat = position.coords.latitude; 

  

     

      const api = "d6307dbf9163c7ce9e872521fd7b6b7b"; 

  

      

      const base = 

`api.openweathermap.org/data/2.5/weather?lat=25.794161&lon=84.7415135&appid=d6307dbf9163c7ce9e872521fd7b6b7b`; 

  

      

      fetch(base) 

        .then((response) => { 

          return response.json(); 

        }) 

        .then((data) => { 

          console.log(data); 

          temperature.textContent =  

              Math.floor(data.main.temp - kelvin) + "°C"; 

          summary.textContent = data.weather[0].description; 

          loc.textContent = data.name + "," + data.sys.country; 

          let icon1 = data.weather[0].icon; 

          icon.innerHTML =  

              `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`; 

        }); 

    }); 

  } 
}); 