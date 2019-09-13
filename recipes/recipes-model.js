const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getRecipeInstructions,
}

function getRecipes() {
    return db('recipes')
}

function getRecipeInstructions(id) {
    return db('recipes as r')
        .select('r.recipe_name', 'i.step', 'i.step_order')
        .join('instructions as i', 'r.id', 'i.recipe_id')
        .where({ recipe_id: id})
        .orderBy('i.step_order')
        .then(recipe => {
            return recipe
        })
        
}

// function getShoppingList(id) {
//     return ()
// }


// - `getShoppingList(recipe_id)`: should return a list of all 
// ingredients and quantities for a given recipe
