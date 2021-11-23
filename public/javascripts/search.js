window.onload=function(){
    var x  =document.getElementById("search").innerHTML
    var srch=x.substring(11,x.length)
    
    fetch("https://content.guardianapis.com/search?api-key=8524ee2b-5e3b-4b71-8e94-bf9e15da7c17&page-size=20&show-fields=all&q="+srch).then(response => response.json())
        .then(function(data){
            var results=data.response.results
            for(i=0;i<results.length;i++){
                
                var z=document.createElement("div")
                z.id=i+"Div"
                z.classList.add("articleDiv")
                var div = i+"Div"
                document.getElementById("all").appendChild(z);

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
function redirect(x){
    var s = window.location.href;
    var i = s.indexOf('?');
    s=s.substring(0,i);
    s=s.replace('news',x);
    window.location.href=s
    
}