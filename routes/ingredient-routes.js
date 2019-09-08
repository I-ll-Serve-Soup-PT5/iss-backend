const router = require('express').Router();

const ingredients = require('../data/models/ingredientsModel');

router.get('/test', (req, res) => {
  res.status(200).json({ message: 'middleware test' });
});

router.get('/', async (req, res) => {
  try {
    const userIngreds = await ingredients.getIngredientsByUserId(req.session.user.id)
    res.status(200).json({ ingredients: userIngreds });
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const ingredient = await ingredients.getIngredientById(id);
    res.status(200).json({ ingredient });
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/out', async (req, res) => {
  try {

  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/add', async (req, res) => {
  try {

  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/edit/:id', async (req, res) => {
  try {
    const { id } = req.params;
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/del/:id', async (req, res) => {
  try {
    const { id } = req.params;
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;