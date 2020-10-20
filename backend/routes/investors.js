const { createInvestor, fetchInvestors } = require("../controllers/investors");
<<<<<<< HEAD

module.exports = (router, prefix) => {
    router.post(`${prefix}/create`, createInvestor),
        router.get(`${prefix}/all`, fetchInvestors);
=======
const { authenticateToken } = require("../helpers")

module.exports = (router, prefix) => {
    router.post(`${prefix}/create`,authenticateToken, createInvestor),
        router.get(`${prefix}/all`,authenticateToken, fetchInvestors);
>>>>>>> upstream/develop
};
