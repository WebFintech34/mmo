const { createTrader, fetchTraders } = require("../controllers/traders");
const { authenticateToken } = require("../helpers");

module.exports = (router, prefix) => {
    router.post(`${prefix}/create`,authenticateToken, createTrader),
    router.get(`${prefix}/all`,authenticateToken, fetchTraders);
};
