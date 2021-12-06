const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const filmSchema = new mongoose.Schema({

//Place your Schema here
FilmID:Number,
Title:String,
Body:String,
Date:String,
Reviews:[{
    ReviewID:Number,
    Title:String,
    Body:String,
    Date:String
}]


 });
 

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;
