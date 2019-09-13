const express = require('express');

const db = require('../data/db-config.js');
const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
})

router.get('/:id/instructions', (req, res) => {

    const { id } = req.params

     Recipes.getRecipeInstructions(id)
        .then(instructions => {
            res.status(200).json(instructions)
        })
})

module.exports = router;