const { getRSSFeed, } = require("../controllers/rss");

module.exports = (router, prefix) => {
    router.get(`${prefix}/feed`, getRSSFeed)
};
