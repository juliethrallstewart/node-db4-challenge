const express = require('express');
const helmet = require('helmet');

const RecipesRouter = require('../recipes/recipes-router.js');
const IngredientsRouter = require('../ingredients/ingredients-router');
const RecipeIngredients = require('../recipeIngredients/recipeIngredients-router');

const server = express();

server.use(helmet());
server.use(express.json())

server.use('/api/recipes', RecipesRouter)
server.use('/api/ingredients', IngredientsRouter)
server.use('api/recipe_ingredients', RecipeIngredients)

server.get('/', (req, res) => {
    res.send('Welcome to my cookbook!')
})

module.exports = server;

// get all the recipes by name
// get a recipe with its ingredients
// get all the recipes and their ingredients

//get a list of all available 'ingredients'

//get a list of all 'recipe ingredients' associated with a recipe id