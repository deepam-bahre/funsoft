const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')
//middlewares
const auth = require('../middlewares/authmiddleware')

router.get(
    '/',
    auth.protect,
    auth.admin,
    customerController.getAllCustomers
  )
  router.post(
    '/add',
    auth.protect,
    auth.admin,
    customerController.addCustomer
  )
  router.delete(
    '/delete/:id',
    auth.protect,
    auth.admin,
    customerController.deleteCustomer
  )
  
  module.exports = router