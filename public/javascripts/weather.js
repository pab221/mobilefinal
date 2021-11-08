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
        var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        //var month = months[d.getUTCMonth()];
        document.getElementById("cTemp").innerHTML = data.current.temp+'\u00B0'+'F'
        document.getElementById("cFeel").innerHTML = data.current.feels_like+'\u00B0'+'F'
        document.getElementById("cImg").src = "https://openweathermap.org/img/wn/"+data.current.weather[0].icon+"@2x.png"
        document.getElementById("cDes").innerHTML = data.current.weather[0].description
        document.getElementById("cWind").innerHTML = data.current.wind_speed + ' mph'
        document.getElementById("cHum").innerHTML = data.current.humidity + '%'
        for(i =0;i<8;i++){
        var date = new Date()
        date.setTime(data.daily[i].dt*1000)
        var dateString = weekdays[date.getDay()]+", "+ months[date.getMonth()] +" " +date.getDate()
        document.getElementById(i+"Date").innerHTML = dateString
        document.getElementById(i+"Des").innerHTML = data.daily[i].weather[0].description
        document.getElementById(i+"Img").src = "https://openweathermap.org/img/wn/"+data.daily[i].weather[0].icon+"@2x.png"
        document.getElementById(i+"TempH").innerHTML=data.daily[i].temp.max+'\u00B0'+'F'
        document.getElementById(i+"TempL").innerHTML=data.daily[i].temp.min+'\u00B0'+'F'
        document.getElementById(i+"Wind").innerHTML = data.daily[i].wind_speed + ' mph'
        document.getElementById(i+"Hum").innerHTML = data.daily[i].humidity + '%'

        // date.setTime(data.daily[i].sunrise*1000)
        // console.log(date.getHours()+":"+date.getMinutes()+"AM")

        }
        

    }   
    
    );
    

 
}
getLocation();
};
function showDaily(){
  var x = document.getElementById("dailyDiv");
  if(x.style.display=="none"){
    x.style.display ="block"
    document.getElementById("dh").innerHTML = "Daily Forecast &#9650"

  }
  else{
    document.getElementById("dh").innerHTML = "Daily Forecast &#9660"
    x.style.display ="none"
  }
}