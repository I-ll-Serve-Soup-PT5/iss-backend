module.exports = async (req, res, next) => {
  try {
    if (req.session && req.session.user) {
      next();
    } else {
      res.status(403).json({ message: 'invalid credentials' });
    }
  } catch(err) {
    res.status(500).json(err);
  }
};