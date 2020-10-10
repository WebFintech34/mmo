const Investor = require('../models/investors')
const { errors } = require('../helpers')

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