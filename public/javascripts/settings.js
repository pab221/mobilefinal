window.onload = function () {

    var tms = document.getElementsByClassName("teams")
    
    var teams=[];
    for(j=0;j<tms.length;j++){
        
        teams.push(tms[j].innerHTML)
    }
    var interests = document.getElementById("interests").innerHTML.split(',')
    for(j=0;j<interests.length;j++){
        document.getElementById(interests[j]).checked=true
    }
    var url = window.location.href.split('/')
    
    var x = document.createElement("input");
    
    x.type="text"
    x.name="Username"
    x.value=url[4]
    x.style.visibility="hidden"
    document.getElementById("frm").appendChild(x);

    fetch("https://www.thesportsdb.com/api/v1/json/50130162/lookup_all_teams.php?id=4424").then(response => response.json())
        .then(function(data){
            
            for(i=0;i<data.teams.length;i++){
               
                var label = document.createElement("label");
                label.class="check"
                label.innerHTML = data.teams[i].strTeam;
                document.getElementById("MLBDiv").appendChild(label);
                var input = document.createElement("input");
                input.type="checkbox"
                input.name=data.teams[i].idTeam+'@'+data.teams[i].strTeam+'@'+data.teams[i].strTeamBadge
                input.id=data.teams[i].idTeam
                if(teams.includes(data.teams[i].idTeam)){
                    input.checked=true
                }

                
                
                label.appendChild(input);

                
                
            }
            
        });  
        fetch("https://www.thesportsdb.com/api/v1/json/50130162/lookup_all_teams.php?id=4391").then(response => response.json())
        .then(function(data){
            
            for(i=0;i<data.teams.length;i++){
               
                var label = document.createElement("label");
                label.class="check"
                label.innerHTML = data.teams[i].strTeam;
                document.getElementById("NFLDiv").appendChild(label);
                var input = document.createElement("input");
                input.type="checkbox"
                input.name=data.teams[i].idTeam+'@'+data.teams[i].strTeam+'@'+data.teams[i].strTeamBadge
                input.id=data.teams[i].idTeam
                if(teams.includes(data.teams[i].idTeam)){
                    input.checked=true  
                }

                
                
                label.appendChild(input);

                
                
            }
            
        });  
        fetch("https://www.thesportsdb.com/api/v1/json/50130162/lookup_all_teams.php?id=4387").then(response => response.json())
        .then(function(data){
            
            for(i=0;i<data.teams.length;i++){
               
                var label = document.createElement("label");
                label.class="check"
                label.innerHTML = data.teams[i].strTeam;
                document.getElementById("NBADiv").appendChild(label);
                var input = document.createElement("input");
                input.type="checkbox"
                input.name=data.teams[i].idTeam+'@'+data.teams[i].strTeam+'@'+data.teams[i].strTeamBadge
                input.id=data.teams[i].idTeam
                if(teams.includes(data.teams[i].idTeam)){
                    input.checked=true  
                }

                
                
                label.appendChild(input);   

                
                
            }
            
        });  
        fetch("https://www.thesportsdb.com/api/v1/json/50130162/lookup_all_teams.php?id=4380").then(response => response.json())
        .then(function(data){
            
            for(i=0;i<data.teams.length;i++){
               
                var label = document.createElement("label");
                label.class="check"
                label.innerHTML = data.teams[i].strTeam;
                document.getElementById("NHLDiv").appendChild(label);
                var input = document.createElement("input");
                input.type="checkbox"
                input.name=data.teams[i].idTeam+'@'+data.teams[i].strTeam+'@'+data.teams[i].strTeamBadge
                input.id=data.teams[i].idTeam
                if(teams.includes(data.teams[i].idTeam)){
                    input.checked=true  
                }

                
                
                label.appendChild(input);   

                
                
            }
            
        });  
    
        
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

