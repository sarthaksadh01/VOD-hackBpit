let mongoose = require('mongoose');
var Schema = mongoose.Schema;
var movies = new Schema({
    title:  String,
    poster: String,
    video:   String,
    rating:String,
    provider:String
  
  });
  module.exports = mongoose.model('Movies', movies)