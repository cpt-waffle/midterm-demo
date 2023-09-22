const express = require('express');
const router = express.Router();

const db = require('../db/connection');

router.get('/', (req, res) => {
  db.query('SELECT * FROM urls').then(data => {
    const templateVars = {urls: data.rows};
    return res.render('urls_index', templateVars);
  })
})

module.exports = router;