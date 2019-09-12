const express = require('express');

const db = require('../data/db-config.js');
const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Show my recipes!')
})

module.exports = router;