const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const homepage = (req, res) => {
  res.status(201).json({"Message": "Welcome to homepage!"})
}

const signup = async (req, res) => {
  const username = req.body.username
  const phone = req.body.phone
  const password = req.body.password

  //validate for empty details

  if (!username || !phone || !password) {
    return res.status(400).json('all fields are required')
  } else if (password.length < 8) {
    return res.status(400).json('password too short')
  }
  const user = await User.findOne({ username: username })

  if (user) {
    res.status(400).json({
      message: `user with username:${req.body.username} aleady exists, try another`
    })
  }

  //encrypt the password
  encryptPass = await bcrypt.hash(password, 10)

  //save new user to db
  const newUser = new User({
    username: username,
    phone: phone,
    password: encryptPass
  })

  newUser
    .save()
    .then(user => {
      res.status(201).json({
        message: `${user.username} registered successfully`,
        user
      })
    })
    .catch(err => {
      res.status(500).json(err.message)
    })
}

const signin = (req, res) => {
  const username = req.body.username
  const password = req.body.password

  if (!username || !password) {
    return res.status(400).json({ message: 'all fields are required' })
  }
  //check is user exists in db
  User.findOne({ username: username })
    .then(user => {
      // await bycrypt.compare(password , user.password)
      if (user == null) {
        res.status(400).json({ message: 'user not found' })
      } else {
        bcrypt
          .compare(password, user.password)
          .then(result => {
            if (result == true) {
              const token = jwt.sign({ username }, process.env.JWT_SECRET, {
                expiresIn: '1d'
              })
              res.status(200).json({ user: user, token: token })
            } else {
              res.status(400).json({ message: 'invalid password' })
            }
          })
          .catch(error => {
            res.status(400).json(error.message)
          })
      }
    })
    .catch(err => {
      res.status(400).json(err.message)
    })
}
module.exports = {
  homepage,
  signup,
  signin
}
