exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('measurements')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('measurements').insert([
        { id: 1, type: 'oz' },
        { id: 2, type: 'lbs' },
        { id: 3, type: 'grams' },
        { id: 4, type: 'kg' },
      ]);
    });
};
