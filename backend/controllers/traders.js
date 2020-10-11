const Trader = require('../models/traders')
const { errors } = require('../helpers')

/**
 * @api {post} /trader/create/ trader/create
 * @apiName trader/create
 * @apiGroup Trader
 *
 * @apiDescription Creates a trader user.
 *
 * @apiParam {String} name name of trader.
 * @apiParam {String} gender gender of trader.
 * @apiParam {String} email email of trader.
 * @apiParam {String} picture picture of trader.
 * @apiParam {String} password password of trader.
 * @apiParam {String} phoneNumber phone number of trader.
 * @apiParam {String} birthDate date of birth of trader.
 * @apiParam {String} location location of trader.
 * @apiParam {String} tradingStyle trading style of the trader.
 * @apiParam {String} yearsOfExperience years of experience of the trader.
 * @apiParam {String} brokersUsed list of brokers used.
 * @apiParam {Boolean} isCommittedToEndScams whether trader is committed to ending scams or not.
 *
 * @apiParamExample {json} Request-Example:
 * {
 *   "name": "test",
 *   "gender": "test",
 *   "email": "email@mmo.com",
 *   "picture": "test",
 *   "password": "test",
 *   "phoneNumber": "test",
 *   "birthDate": "01-01-1990",
 *   "location": "test",
 *   "tradingStyle": "test",
 *   "yearsOfExperience": "test",
 *   "brokersUsed": "test",
 *   "isCommittedToEndScams": true
 * 
 *  }
 *
 * @apiSuccess {String} message Trader created successfully..
 *
 * @apiSuccessExample {String} Success-Response:
 *
 *  {
 *     "statusCode": 200,
 *     "message": "Trader created successfully."
 *  }
 *
 * @apiError (500 Internal server error) message Internal server error.
 *
 * @apiErrorExample Error-Response:
 *  {
 *     "statusCode": 500,
 *     "message": "Internal server error"
 *  }
*/


const createTrader = async (req, res) => { 
  const { name, gender, email, picture, password, phoneNumber, birthDate, location, tradingStyle, yearsOfExperience, brokersUsed, isCommittedToEndScams } = req.body
  
  const trader =  new Trader({ 
    name,
    gender,
    email,
    picture,
    password,
    phoneNumber,
    birthDate,
    location,
    tradingStyle,
    yearsOfExperience,
    brokersUsed,
    isCommittedToEndScams 
  })
  try {
     await trader.save()
    return res.json({ statuCode: 200, message: 'Trader created successfully.' })
  } catch (error) {
    console.log(error)
  }
  return res.json({ statusCode: 500, message: errors.internal_server_error })
}

/**
 * @api {get} /trader/all trader/all
 * @apiName invester/all
 * @apiGroup Trader
 *
 * @apiDescription Returns a list of all trader users.
 *
 * @apiSuccess {Object[]} message Array of objects of trader users
 *
 * @apiSuccessExample {String} Success-Response:
 *
 *  {
 *     "statusCode": 200,
 *     "message":  [
 *        {
 *           "name": "test",
 *           "gender": "test",
 *           "email": "email@mmo.com",
 *           "picture": "test",
 *           "password": "test",
 *           "phoneNumber": "test",
 *           "birthDate": "1989-12-31T22:00:00.000Z",
 *           "location": "test",
 *           "tradingStyle": "test",
 *           "yearsOfExperience": "test",
 *           "brokersUsed": "test",
 *           "isCommittedToEndScams": true
 *      },
 *         ... 
 *         ]
 *
 * @apiError (500 Internal server error) message Internal server error.
 *
 * @apiErrorExample Error-Response:
 *
 *  {
 *     "statusCode": 500,
 *     "message": "Internal server error"
 *  }
*/
const fetchTraders = async (req, res) => {
  
  try {
    const traders =  await Trader.find()
    if(traders.length > 0) {
      const filteredTraders =  traders.map((item) => {
  const { name, gender, email, picture, password, phoneNumber, birthDate, location, tradingStyle, yearsOfExperience, brokersUsed, isCommittedToEndScams } = item

        return { 
          name, 
          gender,
          email,
          picture,
          password,
          phoneNumber,
          birthDate,
          location,
          tradingStyle,
          yearsOfExperience,
          brokersUsed,
          isCommittedToEndScams 
        }
      })

      return res.json({ statusCode: 200, message: filteredTraders })
    }
  } catch (error) {
    console.log(error)
  }

 return res.json({ statusCode: 500, message: errors.internal_server_error })
}

module.exports = {
  createTrader,
  fetchTraders
}