const db = require('../dbConfig');

const getIngredientsByUserId = id =>
  db('users as u')
    .select('i.id', 'i.name', 'ui.quantity')
    .join('users_ingredients as ui', 'ui.user_id', 'u.id')
    .join('ingredients as i', 'ui.ingredient_id', 'i.id')
    .where('u.id', id);

const getIngredientById = id => db('ingredients').where({ id });

const addIngredient = ingredient =>
  db('ingredients')
    .insert(ingredient)
    .then(([id]) => getIngredientById(id));

const updateIngredient = (id, changes) =>
  db('ingredients')
    .where({ id })
    .update(changes)
    .then(count => (count > 0 ? getIngredientById(id) : null));

const removeIngredient = id =>
  db('ingredients')
    .where({ id })
    .del();

module.exports = {
  getIngredientsByUserId,
  getIngredientById,
  addIngredient,
  updateIngredient,
  removeIngredient,
};
