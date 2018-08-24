const router = require('express').Router();
const userCtrl = require('../controller/user')

module.exports = (function () {
  router
    .get('/', userCtrl.getAll)
    .post('/', userCtrl.addCustomer)
  
  router
    .get('/:id', userCtrl.getById)
    .put('/:id', userCtrl.updateCustomer)
    .delete('/:id', userCtrl.deleteCustomer)

  return router
}())
