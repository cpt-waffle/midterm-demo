const express = require('express');
const router = express.Router();

// const db = require('../db/connection');
const urlsHelpers = require('../db/queries/urls');

router.get('/', (req, res) => {
  // db.query('SELECT * FROM urls')
  urlsHelpers.getUrls().then(urls => {
    const templateVars = {urls};
    return res.render('urls_index', templateVars);
  })
})

module.exports = router;