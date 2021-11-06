/*
 * This files holds all the code to test you REST API
 */

//Run once broswer has loaded everything
window.onload = function () {



//button event for create
document.getElementById("create")
.addEventListener("click",function(){
    console.log("create")
    fetch("http://localhost:3000/films",{
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({Title: 'The Room', Body:'Oh, Hi Mark'})
      })
    .then(function (response) {
        if (response.ok) {//if ok
            return response.json();;//return response
        } else {
            return Promise.reject(response); //reject
        }
    })
    .then(function(data){
        console.log(data)
    })
},false);

//button event for read
document.getElementById("read")
.addEventListener("click",function(e){
    console.log("read")
    fetch("http://localhost:3000/films")
    .then(function (response) {
        if (response.ok) {//if ok
            return response.json();;//return response
        } else {
            return Promise.reject(response); //reject
        }
    })
    .then(function(data){
        console.log(data)
    })
},false);

//button event for update
document.getElementById("update")
.addEventListener("click",function(e){
    console.log("update")
    fetch("http://localhost:3000/films/1617842147030",{
        method: 'put',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({Title: 'The Other Room', Body:'Goodbye, Mark'})
      })
    .then(function (response) {
        if (response.ok) {//if ok
            return response.json();;//return response
        } else {
            return Promise.reject(response); //reject
        }
    })
    .then(function(data){
        console.log(data)
    })
},false);

//button event for destroy
document.getElementById("destroy")
.addEventListener("click",function(e){
    console.log("destroy")
    fetch("http://localhost:3000/films/1617844062512",{method:'delete'})
    .then(function (response) {
        if (response.ok) {//if ok
            return response.json();;//return response
        } else {
            return Promise.reject(response); //reject
        }
    })
    .then(function(data){
        console.log(data)
    })
    
},false);

};