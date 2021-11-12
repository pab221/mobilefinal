window.onload = function () {
}
fetch("https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=135280").then(response => response.json())
        .then(function(data){
        console.log(data.results)
        for(i=0;i<data.results.length;i++){
            console.log(data.results[i].strEvent)
            console.log(data.results[i].dateEvent)
            console.log(data.results[i].intHomeScore)
            console.log(data.results[i].intAwayScore)
            console.log(data.results[i].strResult)
        }
        });