const { createInvestor, fetchInvestors } = require("../controllers/investors");
const { authenticateToken } = require("../helpers")

module.exports = (router, prefix) => {
    router.post(`${prefix}/create`,authenticateToken, createInvestor),
        router.get(`${prefix}/all`,authenticateToken, fetchInvestors);
};
