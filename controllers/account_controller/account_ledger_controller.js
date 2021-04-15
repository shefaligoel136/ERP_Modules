const AccountLedger = require('../../models/accounts/account_ledger');

module.exports.createAccountLedger = async function(req,res){
    
    try{
        const addingLedger = new AccountLedger(req.body);
        console.log(req.body);
        const insertLedger = await addingLedger.save();
        res.status(201).send(insertLedger);
    }catch(err){
        res.status(400).send(err);
    }
}


module.exports.getAccountsLedger = async function(req,res){
    
    try{
        const getLedger = await AccountLedger.find({});
        res.send(getLedger);
    }catch(err){
        res.status(400).send(err);
    }
}



module.exports.getAccountLedger = async function(req,res){
    
    try{
        const _id = req.params.id
        const getLedger = await AccountLedger.findById({_id});
        res.send(getLedger);
    }catch(err){
        res.status(400).send(err);
    }
}



module.exports.updateAccountLedger = async function(req,res){
    
    try{
        const _id = req.params.id
        const updatedLedger = await AccountLedger.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.send(updatedLedger);
    }catch(err){
        res.status(500).send(err);
    }
}


module.exports.deleteAccountLedger = async function(req,res){
    
    try{
        const _id = req.params.id
        const deleteLedger = await AccountLedger.findByIdAndDelete(_id);
        res.send(deleteLedger);
    }catch(err){
        res.status(500).send(err);
    }
}