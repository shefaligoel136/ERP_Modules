const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer_controller')

router.post('/customer',customerController.createCustomer);
router.get('/customer',customerController.getCustomer);
router.get('/customer/:id',customerController.getIndvCustomer);
router.patch('/customer/:id',customerController.updateIndvCustomer);
router.delete('/customer/:id',customerController.deleteIndvCustomer);
router.get('/searchCustomer',customerController.scoreCustomer);


module.exports = router;