const useInvestors = require("./investors");
const useTraders = require("./traders");

module.exports = (router) => {
    useInvestors(router, "/investor");
    useTraders(router, "/trader");
};
