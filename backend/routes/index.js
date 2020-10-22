const useInvestors = require("./investors");
const useTraders = require("./traders");
const useUsers = require("./users");
const useRSS = require("./rss")

module.exports = (router) => {
    useInvestors(router, "/investor");
    useTraders(router, "/trader");
    useUsers(router, "/user");
    useRSS(router, "/rss");
};
