const mongoose = require('mongoose');

const accountGroup_Schema = new mongoose.Schema({
    account_group_name:{
        type: String
    },
    groupUnder:{
        type: String
    },
    narration:{
        type: String
    },
    nature:{
        type: String
    },
    gross_profit:{
        type: Number
    },
    extra_date : {
        type: Date
    }
});

const AccountGroup = mongoose.model('AccountGroup',accountGroup_Schema);
module.exports = AccountGroup;