const {  createInvestor } = require('../controllers/investors')

module.exports = (router, prefix) => {
  router.post(`${prefix}/create`, createInvestor) 
}