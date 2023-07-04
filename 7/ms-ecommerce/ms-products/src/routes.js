const { Router } = require("express");
//const axios = require("axios");
const productsService = require("./services/products.service");
const router = Router();

router.get("/products", async (req, res) => {
  try {
    const categories = await productsService.getCategories();
    const products = productsService.showProducts();
    const productsCategory = categories.filter((categories) => {
      return products.map((products) => {
        return categories === products.categories;
      });
    });
    return res.status(200).json({
      products,
      productsCategory,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/products", (req, res) => {
  try {
    return res.status(201).json(req.body);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
