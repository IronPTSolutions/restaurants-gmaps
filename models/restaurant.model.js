const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
  name: {
   type: String,
   required: [true, 'name is required'],
   unique: true
 },
 description: String,
 location: {
   type: { type: String },
   coordinates: [Number]
 },
 file: String
})

module.exports = mongoose.model('Restaurant', RestaurantSchema);
