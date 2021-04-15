const express = require('express');
const router = express.Router();



const InventoryController = require("../controllers/inventory_controller");

router.post("/inventory", InventoryController.createInventory);
router.get("/inventory", InventoryController.getInventory);
router.get("/inventory/:id", InventoryController.getIndvInventory);
router.patch("/inventory/:id", InventoryController.updateIndvInventory);
router.delete("/inventory/:id", InventoryController.deleteIndvInventory);

module.exports = router;



