let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ingredientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  }
});

let Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;

