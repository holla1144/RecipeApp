let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let recipeSchema = new Schema({
    title: {
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
    ingredients: [{
        type: String,
        required: true,
        lowercase: true
    }],
    upvotes: Number,
    reviews: Array
}, {timestamps: true});

let Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
