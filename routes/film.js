const express = require('express');


const Film = require('../models/Film.js');
const router = express.Router();


function getTime(){//function that gets the time,date and its a function because its repetitive
  var d =  new Date(); //date creation
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var month = months[d.getUTCMonth()];
        var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var dayWeek = weekdays[d.getUTCDay()];
        var day = d.getUTCDate();
        var year = d.getUTCFullYear();
        var hrs = d.getUTCHours();
        var mins = d.getUTCMinutes();
        if (mins<10){//formating so single digits dont look weird
          mins = "0"+mins;
        }
        var secs = d.getUTCSeconds();
        if (secs<10){//formating so single digits dont look weird
          secs = "0"+secs;
        }

    
    return (dayWeek + ", " +day+ " " + month +  " "+ year +" " +hrs+":"+ mins+":" + secs + " GMT");
}
/* GET URL Path /film/. */
router.get('/',function(req, res, next) {//get request form /films
  
  Film.find(function(err,films){ //gets all films in collection
    if(err){
      res.status(500).send(err);
    }
    const search =  req.query.search; //gets search query
  if (search){
  const found = [];
  for (i=0;i<films.length;i++){//for all objects in films
    if (films[i].Body.includes(search)){//if body includes search
      found.push(films[i])
    }
    else if (films[i].Title.includes(search)){//if title includes search 
      found.push(films[i])
    }

  }
  res.json(found)
}
else{//if no search query just do normal get
  res.json(films);
}
  })
  

});


router.post('/',function(req, res, next) {//post for /films
  if ((!req.body.Title) || (!req.body.Body)){//missing items in schema
    res.status(404).send("Schema Failure"); 
    
  }
  else{//make new film
  var film = new Film(req.body);//create new film object
    film.FilmID = Date.now(); //this will always be unique unless someone adds to database within the same millisecond, I tried and failed to do so
    
    
    film.Date = getTime();
    film.save();//saves film to db
    res.status(200).json(film);//shows json of film

  }

})
router.get("/:film_id", function(req,res,next){//get for /films/[film_id]
  
  var filmid = req.params.film_id; //gets param
  Film.findOne({FilmID:filmid}, function(err,film){
    if(err){
      res.status(500).send("Error");
      return
    }
    else if(!film){//if film doesn't exist in collection
      res.status(404).send("Film not found");

    }

    else{
      res.status(200).json(film)//send json of film
    }
  })

})

router.delete("/:film_id", function(req,res,next){//delete for /films/[film_id]
  
  var filmid = req.params.film_id;//id from param
  Film.findOne({FilmID:filmid}, function(err,film){
    if(err){
      res.status(500).send("find Error");
      return
    }
    else if(!film){//film not found
      res.status(404).send("Film not found");

    }

    else{//film is found
      film.remove(function(err){//film is removed from films
        if(!err){
          res.status(500).send("remove error")
        }
        else{//film id is deleted
          res.status(200).json(film)
        }
      })
      
    }
  })

});

router.put("/:film_id", function(req,res,next){//put for /fils/[film id]
  
  var filmid = req.params.film_id;//id is gotten
  Film.findOne({FilmID:filmid}, function(err,filmy){
    if(err){
      res.status(500).send("find Error");
      return
    }
    else if(!filmy){//film doesnt exist
      if ((!req.body.Title) || (!req.body.Body)){//object incomplete
        res.status(404).send("Schema Failure");
        
      }
      else{//make new film object
      var film = new Film(req.body);
        film.FilmID = Date.now();
        
    
        film.Date = getTime()
        film.save();
        res.status(200).send(film);
    
      }

    }

    else{//update film object
      filmy.Title = req.body.Title;
      filmy.Body=req.body.Body;
      filmy.save();
      res.status(200).send(filmy);
      
    }
  })

});

router.post("/:film_id/reviews", function(req,res,next){//post for /films/[filmid]/reviews for adding a review to a film
  
  var filmid = req.params.film_id; 
  Film.findOne({FilmID:filmid}, function(err,film){
    if(err){
      res.status(500).send("Error");
      return
    }
    else if(!film){//film doesnt exist
      res.status(404).send("Film not found");

    }
    else if((!req.body.Title)||(!req.body.Body)){//fillm exists but payload incomplete
      
      res.status(404).send("Schema Failure");
    }

    else{//film exist and payload works
      
      var rev = {ReviewID:Date.now(),Title:req.body.Title,Body:req.body.Body,Date:getTime()}//create review with this data
      var revs = film.Reviews;//current reviews for film
      revs.push(rev);//add new review
      film.Reviews = revs; //update
      film.save();
      res.status(200).json(rev)
    }
  })

})

router.get("/:film_id/reviews", function(req,res,next){//get for /films/[id]/reviews includes query also 
  
  var filmid = req.params.film_id;
  Film.findOne({FilmID:filmid}, function(err,film){
    if(err){
      res.status(500).send("Error");
      return
    }
    else if(!film){
      res.status(404).send("Film not found");

    }

    else{
      const search =  req.query.search; //gets search query
      if (search){
        const found = [];
        var revs = film.Reviews;
        for (i=0;i<revs.length;i++){//for all objects in users
          if (revs[i].Body.includes(search)){//if Body includes search
            found.push(revs[i])
          }
          else if (revs[i].Title.includes(search)){//if Title includes search 
            found.push(revs[i])
          }
        } 
        res.json(found)
      }
      else{//if no search query just do normal get
        res.status(200).json(film.Reviews)
      }
      
      
    }
  })

})
router.get("/:film_id/reviews/:review_id", function(req,res,next){//get for /films/[fid]/reviews/[rid]
  
  var filmid = req.params.film_id;
  Film.findOne({FilmID:filmid}, function(err,film){
    if(err){
      res.status(500).send("Error");
      return
    }
    else if(!film){//film not found
      res.status(404).send("Film not found");

    }

    else{//film fouund
      
      var rev = film.Reviews.filter(revy=>revy.ReviewID==req.params.review_id);//gets rev for  matching review id
      
      if (rev.length == 0){//review id is not in reviews
        res.status(404).send("Review not found"); 
      }
      else{//review found
        res.json(rev[0])
      }
      
    }
  })

})

router.put("/:film_id/reviews/:review_id", function(req,res,next){//put for /films/[fid]/reviews/[rid]
  
  var filmid = req.params.film_id;
  Film.findOne({FilmID:filmid}, function(err,film){
    if(err){
      res.status(500).send("Error");
      return
    }
    

    else if(!film){
      res.status(404).send("Film not found");

    }
    else if((!req.body.Title)||(!req.body.Body)){
      res.status(404).send("Schema Failure");
    }
    
    else{//film exists and payload works
      
      var rev = film.Reviews.filter(revy=>revy.ReviewID==req.params.review_id);
      
      if (rev.length == 0){//review not found and must be created
        
      var rev = {ReviewID:Date.now(),Title:req.body.Title,Body:req.body.Body,Date:getTime()} //new review created
      var revs = film.Reviews;
      revs.push(rev);
      film.Reviews = revs;
      film.save();
      res.status(200).json(rev)
      }
      else{//update already existing review
      
        var revy = rev[0]
        revy.Body = req.body.Body;
        revy.Title = req.body.Title;
        film.save();
        res.json(revy)
      }
      
    }
  })

})
router.delete("/:film_id/reviews/:review_id", function(req,res,next){// delete for /films/[fid]/reviews/[rid]
  
  var filmid = req.params.film_id;
  Film.findOne({FilmID:filmid}, function(err,film){
    if(err){
      res.status(500).send("Error");
      return
    }
    else if(!film){
      res.status(404).send("Film not found");

    }

    else{
      
      var rev = film.Reviews.filter(revy=>revy.ReviewID==req.params.review_id);
      
      if (rev.length == 0){
        res.status(404).send("Review not found");
      }
      else{
        var revs = film.Reviews.filter(revy=>revy.ReviewID!=req.params.review_id);//filter out review from reviews
        film.Reviews = revs; //update
        film.save();
        res.json(rev[0])
      }
      
    }
  })

})













module.exports = router;
