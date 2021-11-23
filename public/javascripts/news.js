/*
 * This files holds all the code to test you REST API
 */



//Run once broswer has loaded everything
window.onload = function () {
    
   
    
    if(document.getElementById("business")!=null){
       
        fetch("https://content.guardianapis.com/search?api-key=8524ee2b-5e3b-4b71-8e94-bf9e15da7c17&page-size=20&show-fields=all&section="+"business").then(response => response.json())
        .then(function(data){
            var results=data.response.results
            for(i=0;i<results.length;i++){
                
                var z=document.createElement("div")
                z.id=i+"Div"
                z.classList.add("articleDiv")
                var div = i+"Div"
                document.getElementById("business"+"Div").appendChild(z);

                z=document.createElement("h2")
                z.innerHTML=results[i].webTitle
                document.getElementById(div).appendChild(z);
                
                if(results[i].fields.thumbnail){
                z=document.createElement("img")
                z.src=results[i].fields.thumbnail
                document.getElementById(div).appendChild(z);
                }
               
                z=document.createElement("p")
                z.innerHTML=results[i].fields.trailText
                document.getElementById(div).appendChild(z);
                
                z=document.createElement("a")
                z.classList.add("link")
                z.innerHTML="Read More"
                z.href=results[i].webUrl
                z.target="_blank"
                document.getElementById(div).appendChild(z);



                
                
            }
        });
    }
            if(document.getElementById("technology")!=null){
       
                fetch("https://content.guardianapis.com/search?api-key=8524ee2b-5e3b-4b71-8e94-bf9e15da7c17&page-size=20&show-fields=all&section="+"technology").then(response => response.json())
                .then(function(data){
                    var results=data.response.results
                    
                    for(i=0;i<results.length;i++){
                        
                        var z=document.createElement("div")
                        z.id=i+"technology"+"Div"
                        z.classList.add("articleDiv")
                        var div = i+"technology"+"Div"
                        document.getElementById("technology"+"Div").appendChild(z);
        
                        z=document.createElement("h2")
                        z.innerHTML=results[i].webTitle
                        document.getElementById(div).appendChild(z);
                        
                        if(results[i].fields.thumbnail){
                        z=document.createElement("img")
                        z.src=results[i].fields.thumbnail
                        document.getElementById(div).appendChild(z);
                        }
                       
                        z=document.createElement("p")
                        z.innerHTML=results[i].fields.trailText
                        document.getElementById(div).appendChild(z);
                        
                        z=document.createElement("a")
                        z.classList.add("link")
                        z.innerHTML="Read More"
                        z.href=results[i].webUrl
                        z.target="_blank"
                        document.getElementById(div).appendChild(z);
        
        
        
                        
                        
                    }
        
        });
    }
    if(document.getElementById("general")!=null){
       
        fetch("https://content.guardianapis.com/search?api-key=8524ee2b-5e3b-4b71-8e94-bf9e15da7c17&page-size=20&show-fields=all").then(response => response.json())
        .then(function(data){
            var results=data.response.results
            console.log("oooooooooooooooooooooo")
            console.log(results)
            for(i=0;i<results.length;i++){
                
                var z=document.createElement("div")
                z.id=i+"general"+"Div"
                z.classList.add("articleDiv")
                var div = i+"general"+"Div"
                document.getElementById("general"+"Div").appendChild(z);

                z=document.createElement("h2")
                z.innerHTML=results[i].webTitle
                document.getElementById(div).appendChild(z);
                
                if(results[i].fields.thumbnail){
                z=document.createElement("img")
                z.src=results[i].fields.thumbnail
                document.getElementById(div).appendChild(z);
                }
               
                z=document.createElement("p")
                z.innerHTML=results[i].fields.trailText
                document.getElementById(div).appendChild(z);
                
                z=document.createElement("a")
                z.classList.add("link")
                z.innerHTML="Read More"
                z.href=results[i].webUrl
                z.target="_blank"
                document.getElementById(div).appendChild(z);



                
                
            }

});
}
if(document.getElementById("environment")!=null){
       
    fetch("https://content.guardianapis.com/search?api-key=8524ee2b-5e3b-4b71-8e94-bf9e15da7c17&page-size=20&show-fields=all&section="+"environment").then(response => response.json())
    .then(function(data){
        var results=data.response.results
        
        for(i=0;i<results.length;i++){
            
            var z=document.createElement("div")
            z.id=i+"environment"+"Div"
            z.classList.add("articleDiv")
            var div = i+"environment"+"Div"
            document.getElementById("environment"+"Div").appendChild(z);

            z=document.createElement("h2")
            z.innerHTML=results[i].webTitle
            document.getElementById(div).appendChild(z);
            
            if(results[i].fields.thumbnail){
            z=document.createElement("img")
            z.src=results[i].fields.thumbnail
            document.getElementById(div).appendChild(z);
            }
           
            z=document.createElement("p")
            z.innerHTML=results[i].fields.trailText
            document.getElementById(div).appendChild(z);
            
            z=document.createElement("a")
            z.classList.add("link")
            z.innerHTML="Read More"
            z.href=results[i].webUrl
            z.target="_blank"
            document.getElementById(div).appendChild(z);



            
            
        }

});
}
if(document.getElementById("education")!=null){
       
    fetch("https://content.guardianapis.com/search?api-key=8524ee2b-5e3b-4b71-8e94-bf9e15da7c17&page-size=20&show-fields=all&section="+"education").then(response => response.json())
    .then(function(data){
        var results=data.response.results
        
        for(i=0;i<results.length;i++){
            
            var z=document.createElement("div")
            z.id=i+"education"+"Div"
            z.classList.add("articleDiv")
            var div = i+"education"+"Div"
            document.getElementById("education"+"Div").appendChild(z);

            z=document.createElement("h2")
            z.innerHTML=results[i].webTitle
            document.getElementById(div).appendChild(z);
            
            if(results[i].fields.thumbnail){
            z=document.createElement("img")
            z.src=results[i].fields.thumbnail
            document.getElementById(div).appendChild(z);
            }
           
            z=document.createElement("p")
            z.innerHTML=results[i].fields.trailText
            document.getElementById(div).appendChild(z);
            
            z=document.createElement("a")
            z.classList.add("link")
            z.innerHTML="Read More"
            z.href=results[i].webUrl
            z.target="_blank"
            document.getElementById(div).appendChild(z);



            
            
        }

});
}
if(document.getElementById("film")!=null){
       
    fetch("https://content.guardianapis.com/search?api-key=8524ee2b-5e3b-4b71-8e94-bf9e15da7c17&page-size=20&show-fields=all&section="+"film").then(response => response.json())
    .then(function(data){
        var results=data.response.results
        
        for(i=0;i<results.length;i++){
            
            var z=document.createElement("div")
            z.id=i+"film"+"Div"
            z.classList.add("articleDiv")
            var div = i+"film"+"Div"
            document.getElementById("film"+"Div").appendChild(z);

            z=document.createElement("h2")
            z.innerHTML=results[i].webTitle
            document.getElementById(div).appendChild(z);
            
            if(results[i].fields.thumbnail){
            z=document.createElement("img")
            z.src=results[i].fields.thumbnail
            document.getElementById(div).appendChild(z);
            }
           
            z=document.createElement("p")
            z.innerHTML=results[i].fields.trailText
            document.getElementById(div).appendChild(z);
            
            z=document.createElement("a")
            z.classList.add("link")
            z.innerHTML="Read More"
            z.href=results[i].webUrl
            z.target="_blank"
            document.getElementById(div).appendChild(z);



            
            
        }

});
}
if(document.getElementById("politics")!=null){
       
    fetch("https://content.guardianapis.com/search?api-key=8524ee2b-5e3b-4b71-8e94-bf9e15da7c17&page-size=20&show-fields=all&section="+"politics").then(response => response.json())
    .then(function(data){
        var results=data.response.results
        
        for(i=0;i<results.length;i++){
            
            var z=document.createElement("div")
            z.id=i+"politics"+"Div"
            z.classList.add("articleDiv")
            var div = i+"politics"+"Div"
            document.getElementById("politics"+"Div").appendChild(z);

            z=document.createElement("h2")
            z.innerHTML=results[i].webTitle
            document.getElementById(div).appendChild(z);
            
            if(results[i].fields.thumbnail){
            z=document.createElement("img")
            z.src=results[i].fields.thumbnail
            document.getElementById(div).appendChild(z);
            }
           
            z=document.createElement("p")
            z.innerHTML=results[i].fields.trailText
            document.getElementById(div).appendChild(z);
            
            z=document.createElement("a")
            z.classList.add("link")
            z.innerHTML="Read More"
            z.href=results[i].webUrl
            z.target="_blank"
            document.getElementById(div).appendChild(z);



            
            
        }

});
}
if(document.getElementById("science")!=null){
       
    fetch("https://content.guardianapis.com/search?api-key=8524ee2b-5e3b-4b71-8e94-bf9e15da7c17&page-size=20&show-fields=all&section="+"science").then(response => response.json())
    .then(function(data){
        var results=data.response.results
        
        for(i=0;i<results.length;i++){
            
            var z=document.createElement("div")
            z.id=i+"science"+"Div"
            z.classList.add("articleDiv")
            var div = i+"science"+"Div"
            document.getElementById("science"+"Div").appendChild(z);

            z=document.createElement("h2")
            z.innerHTML=results[i].webTitle
            document.getElementById(div).appendChild(z);
            
            if(results[i].fields.thumbnail){
            z=document.createElement("img")
            z.src=results[i].fields.thumbnail
            document.getElementById(div).appendChild(z);
            }
           
            z=document.createElement("p")
            z.innerHTML=results[i].fields.trailText
            document.getElementById(div).appendChild(z);
            
            z=document.createElement("a")
            z.classList.add("link")
            z.innerHTML="Read More"
            z.href=results[i].webUrl
            z.target="_blank"
            document.getElementById(div).appendChild(z);



            
            
        }

});
}
if(document.getElementById("sports")!=null){
       
    fetch("https://content.guardianapis.com/search?api-key=8524ee2b-5e3b-4b71-8e94-bf9e15da7c17&page-size=20&show-fields=all&section="+"sport").then(response => response.json())
    .then(function(data){
        var results=data.response.results
        
        for(i=0;i<results.length;i++){
            
            var z=document.createElement("div")
            z.id=i+"sports"+"Div"
            z.classList.add("articleDiv")
            var div = i+"sports"+"Div"
            document.getElementById("sports"+"Div").appendChild(z);

            z=document.createElement("h2")
            z.innerHTML=results[i].webTitle
            document.getElementById(div).appendChild(z);
            
            if(results[i].fields.thumbnail){
            z=document.createElement("img")
            z.src=results[i].fields.thumbnail
            document.getElementById(div).appendChild(z);
            }
           
            z=document.createElement("p")
            z.innerHTML=results[i].fields.trailText
            document.getElementById(div).appendChild(z);
            
            z=document.createElement("a")
            z.classList.add("link")
            z.innerHTML="Read More"
            z.href=results[i].webUrl
            z.target="_blank"
            document.getElementById(div).appendChild(z);



            
            
        }

});
}
if(document.getElementById("world")!=null){
       
    fetch("https://content.guardianapis.com/search?api-key=8524ee2b-5e3b-4b71-8e94-bf9e15da7c17&page-size=20&show-fields=all&section="+"world").then(response => response.json())
    .then(function(data){
        var results=data.response.results
        
        for(i=0;i<results.length;i++){
            
            var z=document.createElement("div")
            z.id=i+"world"+"Div"
            z.classList.add("articleDiv")
            var div = i+"world"+"Div"
            document.getElementById("world"+"Div").appendChild(z);

            z=document.createElement("h2")
            z.innerHTML=results[i].webTitle
            document.getElementById(div).appendChild(z);
            
            if(results[i].fields.thumbnail){
            z=document.createElement("img")
            z.src=results[i].fields.thumbnail
            document.getElementById(div).appendChild(z);
            }
           
            z=document.createElement("p")
            z.innerHTML=results[i].fields.trailText
            document.getElementById(div).appendChild(z);
            
            z=document.createElement("a")
            z.classList.add("link")
            z.innerHTML="Read More"
            z.href=results[i].webUrl
            z.target="_blank"
            document.getElementById(div).appendChild(z);



            
            
        }

});
}

    
//Interests=["business","education","environment","film","general","politics","science","sports","technology","world"]



};
function showDiv(val){
    console.log(val.innerHTML)
    var id = val.innerHTML.substring(0,val.innerHTML.length-2)
    var x = document.getElementById(id+"Div");
    if(x.style.display=="none"){
      x.style.display ="block"
      document.getElementById(id).innerHTML = val.innerHTML.substring(0,val.innerHTML.length-2)+" ▲"
  
    }
    else{
      document.getElementById(id).innerHTML =val.innerHTML.substring(0,val.innerHTML.length-2) + " ▼"
      x.style.display ="none"
    }
  }



