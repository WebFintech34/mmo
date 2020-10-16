const { createUser, login } = require("../controllers/users");

module.exports = (router, prefix) => {
    router.post(`${prefix}/create`, createUser)
    router.post(`${prefix}/login`, login)
};
