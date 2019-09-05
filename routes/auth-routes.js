const router = require('express').Router();
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ message: 'missing parameters' });
    }
    const hash = bcrypt.hashSync(password, 8);
    //const newUser = await users.addUser({ username, password: hash });

    //res.status(201).json(newUser);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    //const user = await users.getUserByName(username);

    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.user = user;
      res.status(200).json({ message: `welcome, ${username}` });
    } else {
      res.status(403).json({ message: 'invalid credentials' });
    }
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy();
  }  
  res.status(204).end();
});

module.exports = router;