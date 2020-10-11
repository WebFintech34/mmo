const {  createInvestor, fetchInvestors  } = require('../controllers/investors')

module.exports = (router, prefix) => {
  router.post(`${prefix}/create`, createInvestor),
  router.get(`${prefix}/all`, fetchInvestors)
}