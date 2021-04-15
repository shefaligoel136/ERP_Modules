const mongoose = require('mongoose');

const accountLedger_Schema = new mongoose.Schema({

    account_ledger_name :{
        type: String
    },
    account_group_name:{
        type: String
    },
    opening_balance : {
        type : Number
    },
    account_number : {
        type : Number
    },
    branch_name : {
        type : Number
    },
    branch_code : {
        type : Number
    },
    description : {
        type : Number
    }

});

const AccountLedger = mongoose.model('AccountLedger',accountLedger_Schema);
module.exports = AccountLedger;