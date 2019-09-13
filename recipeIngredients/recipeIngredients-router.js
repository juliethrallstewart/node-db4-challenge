const express = require('express');

const db = require('../data/db-config.js');
const Recipes = require('./recipeIngredients-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Let\'s make a recipe!')
})

module.exports = router;