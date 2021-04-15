const express = require('express');
const router = express.Router();

const accountGroupController = require('../../controllers/account_controller/account_group_controller');

router.post('/accountGroup',accountGroupController.createAccountGroup);
router.get('/accountsGroup',accountGroupController.getAccountsGroup);
router.get('/accountGroup/:id',accountGroupController.getAccountGroup);
router.patch('/accountGroup/:id',accountGroupController.updateAccountGroup);
router.delete('/accountGroup/:id',accountGroupController.deleteAccountGroup);


module.exports = router;