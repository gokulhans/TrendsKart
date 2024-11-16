const express = require("express");
const upload = require("../middleware/upload");

const router = express.Router();

const managerController = require("../controllers/manager/managerController");

router.get("/notify/:id", managerController.notify);

module.exports = router;
