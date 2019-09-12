const router = require('express').Router();

const units = require('../data/models/measurementsModel');

router.get('/', async (req, res) => {
  try {
    const unitsList = await units.getMeasurements();
    res.status(200).json(unitsList);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const unit = await units.getMeasurementsById(id);
    res.status(200).json(unit);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/name/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const unit = await units.getByName(name);
    res.status(200).json(unit);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/add', async (req, res) => {
  try {
    const newUnit = await units.addMeasurement(req.body);
    res.status(201).json(newUnit);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.delete('/del/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await units.removeMeasurement(id);
    res.status(204).end();
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;