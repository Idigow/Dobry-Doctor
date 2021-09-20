const { clientController } = require("../controllers/clients.controller");
const { Router } = require("express");

const router = Router();
router.get("/clients", clientController.getAllClients);
router.get("/client/:id", clientController.getClientById);
router.post("/create/client", clientController.createClient);

module.exports = router;