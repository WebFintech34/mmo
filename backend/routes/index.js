const useInvestors = require("./investors");
const useTraders = require("./traders");
<<<<<<< HEAD
=======
const useUsers = require("./users");
>>>>>>> upstream/develop

module.exports = (router) => {
    useInvestors(router, "/investor");
    useTraders(router, "/trader");
<<<<<<< HEAD
=======
    useUsers(router, "/user");
>>>>>>> upstream/develop
};
