const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new mongoose.Schema({

//Place your Schema here
Username:String,
Password:String,
Locations:[
    {
        Name:String,
        Longitude:Number,
        Latitude:Number
    }
],
Interests:[String
],
Teams:[{
    Name:String,
    Id:Number,
    Logo:String
}]



 });
 

const User = mongoose.model('User', userSchema);

module.exports = User;
