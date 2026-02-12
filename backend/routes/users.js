var express = require('express');
var router = express.Router();
const uid2 = require('uid2');
const bcryt = require('bcrypt');

require('../models/connection');
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');

router.post('/signup', (req, res) => {
  if (!checkBody(req.body, ['firstname','username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  // Check if the user has not already been registered
  User.findOne({ username: req.body.username }).then(data => {
    if (data === null) {
      
      const token = uid2(32);
      const hash = bcryt.hashSync(req.body.password, 10);

      const newUser = new User({
        firstname: req.body.firstname,
        username: req.body.username,
        password: hash,
        token:token,
      });

      newUser.save().then(() => {
        res.json({ result: true, token:token});
      });
    } else {
      // User already exists in database
      res.json({ result: false, error: 'User already exists' });
    }
  });
});

router.post('/signin', (req, res) => {
  if (!checkBody(req.body, ['username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  User.findOne({ username: req.body.username}).then(data => {
    if (data && bcryt.compareSync(req.body.password,data.password)) {
      res.json({ result: true, token:data.token});
    } else {
      res.json({ result: false, error: 'User or Password incorrect' });
    }
  });
});

module.exports = router;
