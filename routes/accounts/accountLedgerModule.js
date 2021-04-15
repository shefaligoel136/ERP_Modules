const express = require('express');
const router = express.Router();

const accountLedgerController = require('../../controllers/account_controller/account_ledger_controller')

router.post('/accountLedger',accountLedgerController.createAccountLedger);
router.get('/accountLedger',accountLedgerController.getAccountLedger);
router.get('/accountLedger/:id',accountLedgerController.getAccountLedger);
router.patch('/accountLedger/:id',accountLedgerController.updateAccountLedger);
router.delete('/accountLedger/:id',accountLedgerController.deleteAccountLedger);


module.exports = router;