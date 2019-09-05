const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'middleware test' });
});

router.get('/ingredients', async (req, res) => {
  try {

  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/ingredients/:id', async (req, res) => {
  try {
    const { id } = req.params;
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/ingredients/out', async (req, res) => {
  try {

  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/ingredients/add', async (req, res) => {
  try {

  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/ingredients/edit/:id', async (req, res) => {
  try {
    const { id } = req.params;
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/ingredients/del/:id', async (req, res) => {
  try {
    const { id } = req.params;
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;