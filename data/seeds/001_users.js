exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'fooBar', password: '1234' },
        { id: 2, username: 'wizard', password: 'password' },
      ]);
    });
};
