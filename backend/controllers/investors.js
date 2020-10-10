const Investor = require('../models/investors')
const { errors } = require('../helpers')

/**
 * @api {post} /investor/create/ investor/create
 * @apiName invester/create
 * @apiGroup Investor
 *
 * @apiDescription Creates an investor user.
 *
 * @apiParam {String} name name of investor.
 * @apiParam {String} gender gender of investor.
 * @apiParam {String} email email of investor.
 * @apiParam {String} picture picture of investor.
 * @apiParam {String} password password of investor.
 * @apiParam {String} phoneNumber phone number of investor.
 * @apiParam {String} birthDate date of birth of investor.
 * @apiParam {String} location location of investor.
 * @apiParam {String} isNewbie whether investor is a newbie or not.
 * @apiParam {String} amountWillingToRisk amount investor is willing to risk.
 * @apiParam {String} isAwareOfScams whether the investor is aware of scams or not.
 * @apiParam {String} hasbeenScammed whether the investor has been scammed or not.
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
 *   "isNewbie": false,
 *   "amountWillingToRisk": "100",
 *   "isAwareOfScams": false,
 *   "hasBeenScammed": false
 *  }
 *
 * @apiSuccess {String} message Investor created successfully..
 *
 * @apiSuccessExample {String} Success-Response:
 *
 *  {
 *     "statusCode": 200,
 *     "message": "Investor created successfully."
 *  }
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


const createInvestor = async (req, res) => { 
  const { name, gender, email, picture, password, phoneNumber, birthDate, location, isNewbie, amountWillingToRisk, isAwareOfScams, hasBeenScammed } = req.body
  
  const investor =  new Investor({ 
    name,
    gender,
    email,
    picture,
    password,
    phoneNumber,
    birthDate,
    location,
    isNewbie,
    amountWillingToRisk,
    isAwareOfScams,
    hasBeenScammed,
  })
  try {
     await investor.save()
    return res.json({ statuCode: 200, message: 'Investor created successfully.' })
  } catch (error) {
    console.log(error)
  }
  res.json({ statusCode: 500, message: errors.internal_server_error })
}

module.exports = {
  createInvestor
}