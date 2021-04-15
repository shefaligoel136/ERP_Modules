const AccountGroup = require('../../models/accounts/account_groups');

module.exports.createAccountGroup = async function(req,res){
    
    try{
        const addingGroup = new AccountGroup(req.body);
        console.log(req.body);
        const insertGroup = await addingGroup.save();
        res.status(201).send(insertGroup);
    }catch(err){
        res.status(400).send(err);
    }
}


module.exports.getAccountsGroup = async function(req,res){
    
    try{
        const getGroups = await AccountGroup.find({});
        res.send(getGroups);
    }catch(err){
        res.status(400).send(err);
    }
}



module.exports.getAccountGroup = async function(req,res){
    
    try{
        const _id = req.params.id
        const getGroup = await AccountGroup.findById({_id});
        res.send(getGroup);
    }catch(err){
        res.status(400).send(err);
    }
}



module.exports.updateAccountGroup = async function(req,res){
    
    try{
        const _id = req.params.id
        const updatedGroup = await AccountGroup.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.send(updatedGroup);
    }catch(err){
        res.status(500).send(err);
    }
}


module.exports.deleteAccountGroup = async function(req,res){
    
    try{
        const _id = req.params.id
        const deleteGroup = await AccountGroup.findByIdAndDelete(_id);
        res.send(deleteGroup);
    }catch(err){
        res.status(500).send(err);
    }
}