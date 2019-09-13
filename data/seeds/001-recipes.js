
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'cheese pizza'},
        {recipe_name: 'sweet potato fries'},
        {recipe_name: 'chocolate dipped strawberries'},
      ]);
    });
};
