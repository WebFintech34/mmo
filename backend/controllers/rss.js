const axios =  require("axios");
const { json } = require("body-parser");



var parser = require('fast-xml-parser');
var he = require('he');
const { errors } = require("../helpers");
 
var options = {
    attributeNamePrefix : "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName : "#text",
    ignoreAttributes : true,
    ignoreNameSpace : false,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
    tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
    stopNodes: ["parse-me-as-string"]
};
 

const getRSSFeed = async (req, res) => {
  try {
    const result = await axios.get('https://www.forexlive.com/feed/education')
    if(result) {
      const { data } = result

      if(parser.validate(data) === true) { //optional (it'll return an object in case it's not valid)
      const jsonObj = parser.parse(data,options);
      const { item } = jsonObj.rss.channel
      if(item) {
        return res.json({ statusCode: 200, message: item })
      }
  }
    }

    return res.json({ statusCode: 400, message: "No articles found" })
  } catch (error) {
    return res.json({ statusCode: 500, message: errors.internal_server_error })
    console.log(error)
  }
 }

module.exports = {
  getRSSFeed
}