const express = require('express');

const db = require('../data/db-config.js');
const Recipes = require('./ingredients-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Let\'s create an ingredient!')
})

module.exports = router;