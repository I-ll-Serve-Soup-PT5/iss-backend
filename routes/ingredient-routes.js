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

router.post('/add', async (req, res) => {
  try {
    const [ newIngredient ] = await ingredients.addIngredient(req.body);
    res.status(201).json(newIngredient);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const change = await ingredients.updateIngredient(id, req.body);
    if (change) {
      res.status(200).json({ message: 'edit successful' });
    } else {
      res.status(400).json({ message: 'no such ingredient found' });
    }
  } catch(err) {
    res.status(500).json(err);
  }
});

router.delete('/del/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ingredients.removeIngredient(id);
    res.status(204).end();
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;