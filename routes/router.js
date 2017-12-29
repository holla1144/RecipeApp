let express = require('express');
let router = express.Router();
let controllers = require('../controllers');
let middleware = require('../middleware');
let path = require('path');


router.get('/api/recipes/categories/:category', controllers.getRecipesByCategory);
router.get('/api/recipes/categories', controllers.getManyCategories);
router.get('/api/recipes/:recipeId', controllers.getOneRecipe);
router.get('/api/recipes/getMany/:count', controllers.getManyRecipes);
router.post('/api/recipes/new',  controllers.addOneRecipe);
router.post('/api/recipes/like', controllers.likeRecipe);
router.delete('/api/recipes/:num', controllers.deleteOneRecipe);
router.post('/api/users/new', controllers.addOneUser);
router.post('/api/users/login', controllers.loginUser);

router.get('/*', function(req, res) {
   res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

module.exports = router;
