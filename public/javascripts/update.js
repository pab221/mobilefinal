/*
 * This files holds all the code to test you REST API
 */

//Run once broswer has loaded everything
window.onload = function () {
    
    if(document.getElementById("res").innerHTML=="Success"){
        window.location.href="http://localhost:3000/user/"+document.getElementById("u").innerHTML+"/weather/"
    }
    else{
        window.setTimeout(function(){

            // Move to a new location or you can do something else
            window.location.href="http://localhost:3000/user/"+document.getElementById("u").innerHTML+"/settings/"
        
        }, 2000);
    }


};


  