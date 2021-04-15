const mongoose = require('mongoose');

const hr_Schema = new mongoose.Schema({});

const AccountGroup = mongoose.model('accountGroup_Schema',hr_Schema);
module.exports = AccountGroup;