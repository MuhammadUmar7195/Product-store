const express = require("express");
const router = express.Router();
const { Add, Remove, getAllData, updateData } = require("../CONTROLLERS/product-controller.js");

// router.post("/products", Add);
// router.delete("/products/:id", Remove);
// router.get("/products", getAllData);

router.route("/products").post(Add).get(getAllData);
router.route("/products/:id").delete(Remove).patch(updateData);

module.exports = router;
