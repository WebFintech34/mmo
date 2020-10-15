const User = require("../models/users");
const jwt = require('jsonwebtoken');
const { errors, hashPassword, comparePasswordHash } = require("../helpers");

/**
 * @api {post} /user/create/ user/create
 * @apiName trader/create
 * @apiGroup Trader
 *
 * @apiDescription Creates a user.
 *
 * @apiParam {String} username username of user.
 * @apiParam {String} email email of trader.
 * @apiParam {String} password password of user.

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
 * @apiSuccess {String} message User created successfully..
 *
 * @apiSuccessExample {String} Success-Response:
 *
 *  {
 *     "statusCode": 200,
 *     "message": "User created successfully."
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

const createUser = async (req, res) => {
    const {
        username,
        email,
        password
    } = req.body;

    const hashedPassword = await hashPassword(password);

    const trader = new User({
        username,
        email,
        password: hashedPassword,
       
    });
    try {
        await trader.save();
        return res.json({
            statuCode: 200,
            message: "User created successfully.",
        });
    } catch (error) {
        console.log(error);
    }
    return res.json({ statusCode: 500, message: errors.internal_server_error });
};

const login = async (req, res) => {
  const { username, password } = req.body

  try {
    const result = await User.find({ username })
    if(result) {
      const user = result[0]
      const matched = await comparePasswordHash(password, user.password)
      if (!matched) return res.json({ statusCode: 412, message: errors.current_password_incorrect })
        
      req.user = { authorized: true }

      const accessToken = jwt.sign( { username: user.username, email: user.email  }, `${process.env.ACCESS_TOKEN_SECRET}`, { expiresIn : '1h' }) // expires in an hour
     return res.json({ statusCode: 200, message: { accessToken: accessToken }})
    }
   
  } catch (error) {
    console.log(error)
  }
  
  return res.json({ statusCode: 500, message: errors.internal_server_error });
}

module.exports = {
  createUser,
  login
}