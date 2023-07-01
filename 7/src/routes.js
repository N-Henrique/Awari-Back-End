const { Router } = require("express");
const categoryService = require("./categories/category.service");
const productsService = require("./products/products.service");
const route = Router();

route.post("/products", (req, res) => {
  console.log(req.body);
  return res.send("deu certo");
});

//controler
route.get("/products/:category", (req, res) => {
  console.log(req.query);
  const products = productsService.showProducts(req.query.price);
  return res.status(201).json(products);
});

route.get("/categories", (req, res) => {
  const categories = categoryService.showCategories();
  return res.status(200).json(categories);
});

route.get("/payments", (req, res) => {
  return res.send("Meu Servidor");
});

module.exports = route;
