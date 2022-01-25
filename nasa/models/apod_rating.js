var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

// Create the schema and make sure the url is unique as each picture is being voted on by users
var RatingSchema = new Schema({
  image_id: {
      type: String,
      unique: true,
    },
  user_id: String,
  rating: Number,
});

// Compile model from schema
module.exports = mongoose.model('RatingModel', RatingSchema );
