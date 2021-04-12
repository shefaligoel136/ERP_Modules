const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index_controller')

router.get('/',indexController.crmModule);

router.use('/crmModule',require('./crmModule'));
router.use('/inventoryModule',require('./inventoryModule'));

module.exports = router;