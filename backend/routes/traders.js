const {  createTrader, fetchTraders } = require('../controllers/traders')

module.exports = (router, prefix) => {
  router.post(`${prefix}/create`, createTrader),
  router.get(`${prefix}/all`, fetchTraders)
}