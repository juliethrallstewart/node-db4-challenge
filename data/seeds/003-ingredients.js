
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'pizza dough'},
        {ingredient_name: 'pizza sauce'},
        {ingredient_name: '2 cups shredded cheese'},
        {ingredient_name: '3 tb fresh chopped basil'},
        {ingredient_name: 'sea salt to taste'},
        {ingredient_name: '1-2 large sweet potatoes'},
        {ingredient_name: '1 tb extra virgin olive oil'},
        {ingredient_name: '1 dark chocolate bar'},
        {ingredient_name: 'pint of strawberries'},
      ]);
    });
};
