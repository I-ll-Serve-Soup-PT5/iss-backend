exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users_ingredients').insert([
        { user_id: 1, ingredient_id: 1, quantity: 3, measurement_id: 1 },
        { user_id: 1, ingredient_id: 2, quantity: 1, measurement_id: 2 },
        { user_id: 2, ingredient_id: 3, quantity: 2, measurement_id: 4 },
        { user_id: 2, ingredient_id: 1, quantity: 4, measurement_id: 3 },
      ]);
    });
};
