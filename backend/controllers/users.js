const User = require("../models/users");
const jwt = require('jsonwebtoken');
const { errors, hashPassword, comparePasswordHash } = require("../helpers");

/**
 * @api {post} /user/create/ user/create
 * @apiName user/create
 * @apiGroup User
 *
 * @apiDescription Creates a user.
 *
 * @apiParam {String} username username of user.
 * @apiParam {String} email email of user.
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

    const user = new User({
        username,
        email,
        password: hashedPassword,
       
    });
    try {
        await user.save();
        return res.json({
            statuCode: 200,
            message: "User created successfully.",
        });
    } catch (error) {
        console.log(error);
    }
    return res.json({ statusCode: 500, message: errors.internal_server_error });
};

/**
 * @api {post} /user/login/ user/login
 * @apiName user/login
 * @apiGroup User
 *
 * @apiDescription Returns an access token for the user.
 *
 * @apiParam {String} username username of user.
 * @apiParam {String} password password of user.

 *
 * @apiParamExample {json} Request-Example:
 * {
 *   "username": "test",
 *   "password": "test",
 *  }
 *
 * @apiSuccess {String} message accessToken eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6ImVtYWlsQG1tby5jb20iLCJpYX...
 *
 * @apiSuccessExample {String} Success-Response:
 *
 *  {
 *     "statusCode": 200,
 *     "message": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6ImVtYWlsQG1tby5jb20iLCJpYXQiOjE2MDI4NTU2MDgsImV4cCI6MTYwMjg1OTIwOH0.sG0afJbmNSrf-MAMWMqyeqZR7rqEwerfRIJvIvhOnoo"
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