var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: String,
});

// Compile model from schema
module.exports = mongoose.model('UserModel', UserSchema );
