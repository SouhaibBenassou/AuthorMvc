import express from "express"
const controller = require("../controllers/categoriesController");

router.get("/", controller.getCategories);
router.post("/", controller.createCategory);

module.exports = router;
