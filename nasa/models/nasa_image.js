var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

// Create the schema and make sure the url is unique as each picture is being voted on by users
var NasaSchema = new Schema({
  url: {
      type: String,
      unique: true,
    },
  title: String,
  description: String,
});

// Compile model from schema
module.exports = mongoose.model('NasaModel', NasaSchema );
