const { Router } = require("express");
const categoryService = require("./categories/category.service");
const productService = require("./products/products.service");
const route = Router();

//controler
route.get("/users", (req, res) => {
  return res.send("Usuários");
});

route.get("/products/:category", (req, res) => {
  console.log(req.params);
  const products = productService.showProducts(req.query.price);
  return res.json(products);
});

route.get("/categories", (req, res) => {
  const categories = categoryService.showCategories();
  return res.json(categories);
});

route.get("/pagamentos", (req, res) => {
  return res.send("Meu Servidor");
});

module.exports = route;
