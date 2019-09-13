
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: '1', step: 'buy pizza dough', step_order: '1'},
        {recipe_id: '1', step: 'heat oven to 375 degrees', step_order: '2'},
        {recipe_id: '1', step: 'roll out the pizza dough', step_order: '3'},
        {recipe_id: '2', step: 'slice sweet potatoes into fries', step_order: '1'},
        {recipe_id: '2', step: 'heat oven to 375 degrees', step_order: '2'},
        {recipe_id: '2', step: 'toss fries with olive oil', step_order: '3'},
        {recipe_id: '3', step: 'melt chocolate on low over stovetop', step_order: '1'},
        {recipe_id: '3', step: 'dip strawberries in chocolate', step_order: '2'},
        {recipe_id: '3', step: 'refridgerate for an hour', step_order: '3'},
      ]);
    });
};
