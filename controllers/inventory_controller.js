const inventory_details = require('../models/inventory_details');

// create inventory : post
module.exports.createInventory = async function(req,res){
    
    try{
        const addingInventory = new inventory_details(req.body);
        console.log(req.body);
        const insertInventory = await addingInventory.save();
        res.status(201).send(insertInventory);
    }catch(err){
        res.status(400).send(err);
    }
}

// get inventoryS : get
module.exports.getInventory = async function(req,res){
    
    try{
        const getInventory = await inventory_details.find({});
        res.send(getInventory);
    }catch(err){
        res.status(400).send(err);
    }
}


// get inventory : get
module.exports.getIndvInventory = async function(req,res){
    
    try{
        const _id = req.params.id
        const getInventory = await inventory_details.findById({_id});
        res.send(getInventory);
    }catch(err){
        res.status(400).send(err);
    }
}

// update inventory : patch

module.exports.updateIndvInventory = async function(req,res){
    
    try{
        const _id = req.params.id
        const updateIndvInventory = await inventory_details.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.send(updateIndvInventory);
    }catch(err){
        res.status(500).send(err);
    }
}

// delete inventory : delete

module.exports.deleteIndvInventory = async function(req,res){
    
    try{
        const _id = req.params.id
        const deleteInventory = await inventory_details.findByIdAndDelete(_id);
        res.send(deleteInventory);
    }catch(err){
        res.status(500).send(err);
    }
}