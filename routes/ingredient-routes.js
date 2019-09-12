const router = require('express').Router();

const ingredients = require('../data/models/ingredientsModel');
const units = require('../data/models/measurementsModel');

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

router.post('/assoc', async (req, res) => {
  try {
    let { ingredient_id, measurement_id, measurement_type, quantity } = req.body;
    if (!measurement_id) {
      const type = await units.getByType(measurement_type);
      if (!type) {
        const { id }  = await units.addMeasurement({ type: measurement_type });
        measurement_id = id;
      } else {
        measurement_id = type.id;
      }
    }
    await ingredients.addIngredientToUser(req.session.user.id, ingredient_id, measurement_id, quantity);
    res.status(201).json({ message: 'association added' });
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;