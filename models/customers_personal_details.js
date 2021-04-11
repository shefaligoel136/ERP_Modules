const mongoose = require('mongoose');

const customerPD_Schema = new mongoose.Schema({
    first_name : {
        type : String,
        required: true
    },
    last_name : {
        type : String,
        required: true
    },
    phone : {
        type : String,
        required: true
    },
    altPhone : {
        type : String
    },
    addressLine1 : {
        type : String,
        required : true,
        trim :  true
    },
    addressLine2 : {
        type : String,
        trim :  true
    },
    pincode : {
        type : Number,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    dateOfBirth : {
        type : Date,
        required : true,
        trim :  true
    },
    isActive : {
        type : String,
        required : true
    },
    score : {
        type : Number,
        default : "10"
    }
},{
    timestamps : true
});

const CustomerPD = mongoose.model('CustomerPD',customerPD_Schema);
module.exports = CustomerPD;