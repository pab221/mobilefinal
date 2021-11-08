const express = require('express');
const User = require('../models/User.js');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Front Page' });
});
router.get('/user/:user/weather', function(req, res, next) {
  res.render('weather', { title: 'Weather' });
});
router.get('/user', function(req, res, next) {
  User.find(function(err,users){ //gets all films in collection
    if(err){
      res.status(500).send(err);
    }
  res.send(users)
  })
});

router.post('/user',function(req, res, next) {//post for /films
  console.log(req.body)
  if (!req.body.Username){
    res.render('user',{response:"Username Not Long Enough"})
    // res.status(401).send("Username Not Long Enough"); 
    
  }
  else if(req.body.pass1!=req.body.pass2){
    res.render('user',{response:"Passwords Do Not Match"})
    // res.status(402).send("Passwords Do Not Match"); 
  }
  else if(!req.body.pass1){
    res.render('user',{response:"Password Not Long Enough"})
    // res.status(403).send("Password Not Long Enough"); 
  }
  else{
    User.find(function(err,users){ //gets all films in collection
      if(err){
        res.status(500).send(err);
      }
    for(i=0;i<users.length;i++){
      if(users[i].Username==req.body.Username){
        res.render('user',{response:"Username Already Exists"})
        //res.status(405).send("Username Already Exists"); 
        
      }
    }
    var usr = new User();
    usr.Username = req.body.Username;
    usr.Password = req.body.pass1;
    usr.save();
    // res.status(200).json(usr);
    res.render('user',{response:"Success",user:req.body.Username})
    })

  }

  

})

module.exports = router;
