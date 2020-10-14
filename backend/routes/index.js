const useInvestors = require('./investors')

module.exports = (router) => {
  useInvestors(router, '/investor')
 }