/*
 * This files holds all the code to test you REST API
 */



//Run once broswer has loaded everything
window.onload = function () {
    console.log("ehehe")
    Interests=["","business","entertainment","general","health","science","sports","technology"]
    
    if(document.getElementById("business")!=null){
       
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c76b7fe1d985495689a24c57d1ffd6df&category="+"business").then(response => response.json())
        .then(function(data){
            
            for(i=0;i<20;i++){
                document.getElementById("business"+i+"title").innerHTML=data.articles[i].title
                
                if(data.articles[i].urlToImage!=null){
                document.getElementById("business"+i+"img").src=data.articles[i].urlToImage
                }
                document.getElementById("business"+i+"content").innerHTML=data.articles[i].description
                document.getElementById("business"+i+"lnk").innerHTML="Read More"
                document.getElementById("business"+i+"lnk").href=data.articles[i].url
                
            }
        });
    }
    if(document.getElementById("science")!=null){
        
        
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c76b7fe1d985495689a24c57d1ffd6df&category="+"science").then(response => response.json())
        .then(function(data){
            
            for(i=0;i<20;i++){
                document.getElementById("science"+i+"title").innerHTML=data.articles[i].title
                
                if(data.articles[i].urlToImage!=null){
                document.getElementById("science"+i+"img").src=data.articles[i].urlToImage
                }
                document.getElementById("science"+i+"content").innerHTML=data.articles[i].description
                document.getElementById("science"+i+"lnk").innerHTML="Read More"
                document.getElementById("science"+i+"lnk").href=data.articles[i].url
                
            }
        });
    }
    if(document.getElementById("news")!=null){
        
        
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c76b7fe1d985495689a24c57d1ffd6df&category="+"").then(response => response.json())
        .then(function(data){
            
            for(i=0;i<20;i++){
                document.getElementById("news"+i+"title").innerHTML=data.articles[i].title
                
                if(data.articles[i].urlToImage!=null){
                document.getElementById("news"+i+"img").src=data.articles[i].urlToImage
                }
                document.getElementById("news"+i+"content").innerHTML=data.articles[i].description
                document.getElementById("news"+i+"lnk").innerHTML="Read More"
                document.getElementById("news"+i+"lnk").href=data.articles[i].url
                
            }
        });
    }
    if(document.getElementById("entertainment")!=null){
        
        
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c76b7fe1d985495689a24c57d1ffd6df&category="+"entertainment").then(response => response.json())
        .then(function(data){
            
            for(i=0;i<20;i++){
                document.getElementById("entertainment"+i+"title").innerHTML=data.articles[i].title
                
                if(data.articles[i].urlToImage!=null){
                document.getElementById("entertainment"+i+"img").src=data.articles[i].urlToImage
                }
                document.getElementById("entertainment"+i+"content").innerHTML=data.articles[i].description
                document.getElementById("entertainment"+i+"lnk").innerHTML="Read More"
                document.getElementById("entertainment"+i+"lnk").href=data.articles[i].url
                
            }
        });
    }
    if(document.getElementById("general")!=null){
        
        
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c76b7fe1d985495689a24c57d1ffd6df&category="+"general").then(response => response.json())
        .then(function(data){
            
            for(i=0;i<20;i++){
                document.getElementById("general"+i+"title").innerHTML=data.articles[i].title
                
                if(data.articles[i].urlToImage!=null){
                document.getElementById("general"+i+"img").src=data.articles[i].urlToImage
                }
                document.getElementById("general"+i+"content").innerHTML=data.articles[i].description
                document.getElementById("general"+i+"lnk").innerHTML="Read More"
                document.getElementById("general"+i+"lnk").href=data.articles[i].url
                
            }
        });
    }
    if(document.getElementById("health")!=null){
        
        
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c76b7fe1d985495689a24c57d1ffd6df&category="+"health").then(response => response.json())
        .then(function(data){
            
            for(i=0;i<20;i++){
                document.getElementById("health"+i+"title").innerHTML=data.articles[i].title
                
                if(data.articles[i].urlToImage!=null){
                document.getElementById("health"+i+"img").src=data.articles[i].urlToImage
                }
                document.getElementById("health"+i+"content").innerHTML=data.articles[i].description
                document.getElementById("health"+i+"lnk").innerHTML="Read More"
                document.getElementById("health"+i+"lnk").href=data.articles[i].url
                
            }
        });
    }
    if(document.getElementById("sports")!=null){
        
        
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c76b7fe1d985495689a24c57d1ffd6df&category="+"sports").then(response => response.json())
        .then(function(data){
            
            for(i=0;i<20;i++){
                document.getElementById("sports"+i+"title").innerHTML=data.articles[i].title
                
                if(data.articles[i].urlToImage!=null){
                document.getElementById("sports"+i+"img").src=data.articles[i].urlToImage
                }
                document.getElementById("sports"+i+"content").innerHTML=data.articles[i].description
                document.getElementById("sports"+i+"lnk").innerHTML="Read More"
                document.getElementById("sports"+i+"lnk").href=data.articles[i].url
                
            }
        });
    }
    if(document.getElementById("technology")!=null){
        
        
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c76b7fe1d985495689a24c57d1ffd6df&category="+"technology").then(response => response.json())
        .then(function(data){
            
            for(i=0;i<20;i++){
                document.getElementById("technology"+i+"title").innerHTML=data.articles[i].title
                
                if(data.articles[i].urlToImage!=null){
                document.getElementById("technology"+i+"img").src=data.articles[i].urlToImage
                }
                document.getElementById("technology"+i+"content").innerHTML=data.articles[i].description
                document.getElementById("technology"+i+"lnk").innerHTML="Read More"
                document.getElementById("technology"+i+"lnk").href=data.articles[i].url
                
            }
        });
    }




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



