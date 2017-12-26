let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Ingredient = require('./ingredient');
let IngredientSchema = mongoose.model('Ingredient').schema;

let recipeSchema = new Schema({
    title: {
        index: {unique: true},
        type: String,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true
    },
    category: [{
      type: String,
      required: true,
      lowercase: true
    }],
    //TODO Convert author to type objectId
    author: String,
    ingredients: [IngredientSchema],
    upvotes: {
      type: Number,
      default: 0
    },
    reviews: Array,
    directions: [{
      required: true,
      type: String
    }]
}, {timestamps: true});

recipeSchema.post('save', (err, doc, next) => {
  if (err) {
    // Returns custom error message if recipe title has already been taken
    if (err.name === 'MongoError' && err.code === 11000) {
      next(new Error('Recipe title has already been taken'));
    } else {
      next(err)
    }
  }
  next();
});

recipeSchema.post('save', (err, doc, next) => {
  // Returns custom error message if category array is blank
  if (doc.category.length < 1) {
    next(new Error('Category cannot be blank'));
  }
  next();
});

let Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
