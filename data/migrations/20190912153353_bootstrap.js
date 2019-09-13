
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();

            tbl.string('recipe_name', 255).notNullable();

        })
        .createTable('instructions', tbl => {
            tbl.increments()

            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')

            tbl.text('step', 255)
                .notNullable()

            tbl.integer('step_order', 255)
                .notNullable()

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
                // .primary(['recipe_id', 'ingredient_id'])
                .unique(['recipe_id', 'ingredient_id'])

        });

  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
  
};
