
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 255).notNullable().unique();
      tbl.string('password', 255).notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable().unique();
    })
    .createTable('users_ingredients', tbl => {
      tbl
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl
        .integer('ingredient_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl.string('quantity', 255).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('users');
};
