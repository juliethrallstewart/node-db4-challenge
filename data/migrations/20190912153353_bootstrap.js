
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();

            tbl.string('recipe_name', 255).notNullable();

        })
        .createTable('ingredients', tbl => {
            tbl.increments()

            tbl.string('ingredient_name', 125).notNullable()
        })
        .createTable('recipe_ingredients', tbl => {
          
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            tbl
                .integer('ingredient_id')
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            tbl 
                .primary(['recipe_id', 'ingredient_id'])
            tbl
                .decimal('quanity').notNullable()

        });

  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
  
};
