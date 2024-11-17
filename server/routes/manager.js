const express = require("express");
const upload = require("../middleware/upload");

const router = express.Router();

const managerController = require("../controllers/manager/managerController");

router.get("/notify/:productid", managerController.addEnquiry);
router.get("/product/:id", managerController.getProduct);
router.patch("/product/:id", managerController.updateProduct);
router.get("/notifiers", managerController.getNotifiers);
router.get("/products", managerController.getProducts);

module.exports = router;
