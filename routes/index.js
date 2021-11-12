const express = require('express');
const User = require('../models/User.js');
const router = express.Router();
const bodyParser = require('body-parser');
const { exists } = require('../models/User.js');
router.use(bodyParser.json())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Front Page' });
});
router.get('/user/:user/weather', function(req, res, next) {
  res.render('weather', { title: 'Weather' });
});

router.get('/user/:user/sports', function(req, res, next) {
  res.render('sports', { title: 'Sports' });
});
router.get('/user/:user/settings', function(req, res, next) {
  res.render('settings', { title: 'Settings' });
});
router.post('/update', function(req, res, next) {
  User.findOne({"Username":req.body.Username,"Password":req.body.Password},function(err,user){ //gets all films in collection
    if(err){
      res.status(500).send(err);
    }
  else if(!user){
    res.send("Username and Password Do Not Match")
  }
  else{
    Interests=["business","entertainment","general","health","science","sports","technology"]

    var ints=[]
    var teams=[]
    var keys = Object.keys(req.body)
    
    for (i=0;i<keys.length;i++){
      if(Interests.includes(keys[i])){
        ints.push(keys[i])
      }
      else if(keys[i]=="Username"||keys[i]=="Password"){
        console.log("e")
      }
      else{
        var info = keys[i].split('@')
        var team={
          Name:info[1],
          Id:info[0],
          Logo:info[2]

        }
        teams.push(team)
      }
    }
    if(teams.length==0){
      teams.push({
        Name:"Atlanta Braves",
        Id:135268,
        Logo:"https://www.thesportsdb.com/images/media/team/badge/yjs76e1617811496.png"
      })
    }
    user.Interests=ints
    user.Teams=teams
    user.save();
    res.send(user)

  }

  })
});

router.get('/user/:user/news', function(req, res, next) {
  User.find(function(err,users){ //gets all films in collection
    if(err){
      res.status(500).send(err);
    }
    else{
    for(i=0;i<users.length;i++){
      if (users[i].Username==req.params.user){
        res.render('news', { title: 'News',Interests:users[i].Interests });
        
      }
    }
    res.render('user',{response:"Username Does Not Exist"})
    }
  })
  
});
router.get('/user', function(req, res, next) {
  User.find(function(err,users){ //gets all films in collection
    if(err){
      res.status(500).send(err);
    }
  res.send(users)
  })
});


router.post('/register',function(req, res, next) {//post for /films
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
    usr.Interests=["general"]
    usr.save();
    // res.status(200).json(usr);
    res.render('user',{response:"Success",user:req.body.Username})
    })

  }

  

})
router.post('/login', function(req, res, next) {
  console.log(req.body)
  User.find(function(err,users){ //gets all films in collection
    if(err){
      res.status(500).send(err);
    }
    for(i=0;i<users.length;i++){
      if ((users[i].Username==req.body.Username)&(users[i].Password==req.body.Password)){
        res.render('user',{response:"Success",user:req.body.Username})
      }
      else if ((users[i].Username==req.body.Username)&(users[i].Password!=req.body.Password)){
        res.render('user',{response:"Username and Password Do Not Match"})
      }

      
    }

res.render('user',{response:"Username Does Not Exist"})
  })
});

module.exports = router;
