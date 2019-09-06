exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users_ingredients').insert([
        { user_id: 1, ingredient_id: 1, quantity: '3 oz' },
        { user_id: 1, ingredient_id: 2, quantity: '1 lb' },
        { user_id: 2, ingredient_id: 3, quantity: '2 lbs' },
        { user_id: 2, ingredient_id: 1, quantity: '4 oz' },
      ]);
    });
};
