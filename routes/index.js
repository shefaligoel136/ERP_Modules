const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index_controller')

router.get('/',indexController.crmModule);

router.use('/crmModule',require('./crmModule'));

module.exports = router;