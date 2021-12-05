/*
 * This files holds all the code to test you REST API
 */

//Run once broswer has loaded everything
window.onload = function () {
    
    if(document.getElementById("res").innerHTML=="Success"){
        window.location.href="https://oneapp371.herokuapp.com/user/"+document.getElementById("u").innerHTML+"/weather/"
    }
    else{
        window.setTimeout(function(){

            // Move to a new location or you can do something else
            window.location.href = "https://oneapp371.herokuapp.com";
        
        }, 2500);
    }


};
function redirect(user){
    console.log(user)
    window.location.href="https://oneapp371.herokuapp.com/user/"+user
}

  