const router = require('express').Router();
const User = require('../model/user');

router.post('/register', async (req, res) => {
  const user = new User({
    username: req.body.username,
    confirmPassword: req.body.confirmPassword,
    password: req.body.password,
    pin: req.body.pin
  });
  try{
    const savedUser = await user.save();
    res.send(savedUser);
  } catch(err){
    res.status(400).send(err);
  }
});

module.exports = router;
