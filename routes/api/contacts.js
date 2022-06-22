const express = require("express");
const router = express.Router();
const { validation } = require("../../validation/validation");
const controllers = require("../../controllers/controllers");

router.get("/", controllers.getContacts);

router.get("/:contactId", controllers.getContact);

router.post("/", validation, controllers.postContact);

router.delete("/:contactId", controllers.deleteContact);

router.put("/:contactId", validation, controllers.putContact);

module.exports = router;
