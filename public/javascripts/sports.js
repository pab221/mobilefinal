window.onload = function () {
    var tms = document.getElementsByClassName("teams")
    var teams=[];
    for(j=0;j<tms.length;j++){
        
        // teams.push(tms[j].id)
        fetch("https://www.thesportsdb.com/api/v1/json/2/eventslast.php?id="+tms[j].id).then(response => response.json())
        .then(function(data){
        
        for(i=0;i<data.results.length;i++){
            console.log(data.results[i])
            var z=document.createElement("div")
            z.id=data.results[i].idEvent
            z.classList.add("event")
            var div = data.results[i].idEvent
            document.getElementById(data.results[i].idHomeTeam).appendChild(z);
            var x = document.createElement("h3");
            x.innerHTML=data.results[i].strEvent;
            document.getElementById(div).appendChild(x);
            x = document.createElement("h3");
            x.innerHTML=data.results[i].dateEvent;
            document.getElementById(div).appendChild(x);
            // if(data.results[i].strResult!=null){
            // x = document.createElement("h3");
            // x.innerHTML=data.results[i].strResult;
            // document.getElementById(data.results[i].idHomeTeam).appendChild(x);
            // }

            if(data.results[i].strThumb!= null){
                x=document.createElement("img")
            x.src = data.results[i].strThumb
            document.getElementById(div).appendChild(x);
            }
            x=document.createElement("table")
            x.id="table"+data.results[i].idEvent
            
            document.getElementById(div).appendChild(x);

            x=document.createElement("tr")
            x.id="teams"+data.results[i].idEvent
            document.getElementById("table"+data.results[i].idEvent).appendChild(x);

            x=document.createElement("td")
            x.innerHTML=data.results[i].strHomeTeam
            document.getElementById("teams"+data.results[i].idEvent).appendChild(x);

            x=document.createElement("td")
            x.innerHTML=data.results[i].strAwayTeam
            document.getElementById("teams"+data.results[i].idEvent).appendChild(x);

            x=document.createElement("tr")
            x.id="score"+data.results[i].idEvent
            document.getElementById("table"+data.results[i].idEvent).appendChild(x);

            x=document.createElement("td")
            x.innerHTML=data.results[i].intHomeScore
            document.getElementById("score"+data.results[i].idEvent).appendChild(x);

            x=document.createElement("td")
            x.innerHTML=data.results[i].intAwayScore
            document.getElementById("score"+data.results[i].idEvent).appendChild(x);


            

        }
        });
        
    }
    
}

function showDiv(h,div){
    var h2=document.getElementById(h)
    var d = document.getElementById(div)
    if(d.style.display=="block"){
        h2.innerHTML =h2.innerHTML.substring(0,h2.innerHTML.length-2) + " ▼"
        d.style.display ="none"
      }
    else{
      d.style.display ="block"
      h2.innerHTML = h2.innerHTML.substring(0,h2.innerHTML.length-2)+" ▲"
  
    }
    
  }
