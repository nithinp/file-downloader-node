'use strict';

var router = require('express').Router();

router.get('/', function (req, res, next) {
  res.status(200).send({
    message: 'success'
  });
});

module.exports = router;
