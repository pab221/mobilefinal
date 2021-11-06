window.onload = function () {
    console.log("djdjdjjdjd")
    var x = document.getElementById("item");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ position.coords.latitude+"&lon="+ position.coords.longitude+"&appid=2fb0326cd4589fd5ee68d3ea9fc0c832&units=imperial").then(response => response.json())
    .then(function(data){
        console.log(data.daily)
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        //var month = months[d.getUTCMonth()];
        document.getElementById("cTemp").innerHTML = data.current.temp+'\u00B0'+'F'
        document.getElementById("cFeel").innerHTML = data.current.feels_like+'\u00B0'+'F'
        document.getElementById("cImg").src = "https://openweathermap.org/img/wn/"+data.current.weather[0].icon.replace('n','d')+"@2x.png"
        document.getElementById("cDes").innerHTML = data.current.weather[0].description
        document.getElementById("cWind").innerHTML = data.current.wind_speed + ' mph'
        document.getElementById("cHum").innerHTML = data.current.humidity + '%'
        var date = new Date()
        date.setTime(data.daily[1].dt*1000)
        document.getElementById("woop").innerHTML = date.toGMTString()


    }   
    
    );
    

 
}
getLocation();
};