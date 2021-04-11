const CustomerPD = require('../models/customers_personal_details');

// create customer : post
module.exports.createCustomer = async function(req,res){
    
    try{
        const addingCustomer = new CustomerPD(req.body);
        console.log(req.body);
        const insertCustomer = await addingCustomer.save();
        res.status(201).send(insertCustomer);
    }catch(err){
        res.status(400).send(err);
    }
}

// get customerS : get
module.exports.getCustomer = async function(req,res){
    
    try{
        const getCustomers = await CustomerPD.find({});
        res.send(getCustomers);
    }catch(err){
        res.status(400).send(err);
    }
}


// get customer : get
module.exports.getIndvCustomer = async function(req,res){
    
    try{
        const _id = req.params.id
        const getCustomer = await CustomerPD.findById({_id});
        res.send(getCustomer);
    }catch(err){
        res.status(400).send(err);
    }
}

// update customer : patch

module.exports.updateIndvCustomer = async function(req,res){
    
    try{
        const _id = req.params.id
        const updatedCustomer = await CustomerPD.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.send(updatedCustomer);
    }catch(err){
        res.status(500).send(err);
    }
}

// delete customer : delete

module.exports.deleteIndvCustomer = async function(req,res){
    
    try{
        const _id = req.params.id
        const deleteCustomer = await CustomerPD.findByIdAndDelete(_id);
        res.send(deleteCustomer);
    }catch(err){
        res.status(500).send(err);
    }
}