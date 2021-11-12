window.onload = function () {
    var url = window.location.href.split('/')
    
    var x = document.createElement("input");
    x.type="text"
    x.name="Username"
    x.value=url[4]
    x.style.visibility="hidden"
    document.getElementById("frm").appendChild(x);

    fetch("https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4424").then(response => response.json())
        .then(function(data){
            
            for(i=0;i<data.teams.length;i++){
               
                var label = document.createElement("label");
                label.class="check"
                label.innerHTML = data.teams[i].strTeam;
                document.getElementById("woop").appendChild(label);
                var input = document.createElement("input");
                input.type="checkbox"
                input.name=data.teams[i].idTeam+'@'+data.teams[i].strTeam+'@'+data.teams[i].strTeamBadge
                input.id=data.teams[i].idTeam
                
                
                label.appendChild(input);

                
                
            }
            
        });   
        
}

