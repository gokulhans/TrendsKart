const express = require("express");
const upload = require("../middleware/upload");

const router = express.Router();

const managerController = require("../controllers/manager/managerController");

router.get("/notify/:productid", managerController.addEnquiry);
router.get("/product/:id", managerController.getProduct);
router.get("/enquiry/:id", managerController.getEnquiry);
router.patch("/product/:id", managerController.updateProduct);
router.delete("/enquiry/:id", managerController.deleteEnquiry);
router.get("/notifiers", managerController.getNotifiers);
router.get("/products", managerController.getProducts);

module.exports = router;
