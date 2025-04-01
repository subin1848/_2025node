const express = require('express');
const router = express.Router();

// routing 설정
router.get('/', (req, res) => {
  res.status(200).send('Get api');
});

router.post('/', (req, res) => {
  res.status(200).send('post api');
});

router.get('/:person', (req, res) => {
  const person = req.params.person;
  // req.params : 객체
  res.status(200).send(person);
});

module.exports = router;