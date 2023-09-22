
const db = require('../connection');


const getUrls = () => {
  return db.query('SELECT * FROM urls').then(data => {
    return data.rows;
  });
}

const getUrlById = id => {
  return db.query('SELECT * FROM urls WHERE id = $1', [id]).then(data => {
    return data.rows;
  })
} 

module.exports = {getUrls, getUrlById}