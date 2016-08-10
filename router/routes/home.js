const express = require('express');
const router = express.Router();

router.get('/', function (req, res){
  if(!req.session.user) res.redirect('sessions/new');
  else {
    data = { 'email': req.session.user.email };
    res.render('index', data);
  }
});

module.exports = router;
