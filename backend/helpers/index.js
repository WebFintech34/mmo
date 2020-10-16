const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const errors = {
    missing_mandatory_paramaters: "Missing mandatory parameters",
    internal_server_error: "Internal server error",
    current_password_incorrect: 'Current password is incorrect',
};

const success = {
    ok: "ok",
    success: "success",
};

 async function requestSessionToken (req, res) {
    const user = req.user
    if (!user.authorized) {
      return res.json({ statusCode: 401, message: errors.unauthorized })
    }
  
    delete user.authorized
    const token = jwt.sign({ user }, `${process.env.TOKEN_SECRET_KEY}`, { expiresIn: Number(process.env.TOKEN_EXPIRATION) })
    return res.json({ statusCode: 200, message: { ...user, token } })
  }
  
   function authService (authHeader) {
    const privateKeyBase64 = Buffer.from(process.env.TOKEN_SECRET_KEY, 'utf8')
  
    if (authHeader) {
      const token = authHeader.split(' ')[1]
      return jwt.verify(token, privateKeyBase64)
    }
    return null
  }
  
   async function verifySessionToken (req, res, next) {
    const authHeader = req.headers.authorization || req.body.token
    let result
  
    if (!authHeader) {
      return res.json({ statusCode: 401, message: errors.token_missing })
    }
  
    try {
      result = await authService(authHeader)
    } catch (error) {
      const { message } = error
      res.json({ statusCode: 401, message })
    }
    if (result) {
      return next()
    } else {
      return res.json({ statusCode: 403, message: errors.error_validating_token })
    }
  }

   async function hashPassword (password) {
    const saltRounds = 10
    const hash = await bcrypt.hash(password, saltRounds)
    return hash
  }
  
   async function comparePasswordHash (password, hash) {
    const match = await bcrypt.compare(password, hash)
    return match
  }

  function authenticateToken ( req, res, next) {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split('Bearer ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err, user) =>
    {
        if (err) return res.json({ statusCode: 403, message: 'jwt must be provided.' })
        req.user = user
        next()
    })
}
  

module.exports = {
    errors,
    success,
    hashPassword,
    comparePasswordHash,
    authenticateToken
};
