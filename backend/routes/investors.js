const { test } = require('../controllers/investors')

module.exports = (router, prefix) => {
  router.get(`${prefix}/`, test) 
}