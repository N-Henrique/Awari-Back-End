const { Router } = require("express");
const categoriesService = require("./services/categories.service");
const router = Router();

router.get("/categories", (req, res) => {
  const categories = categoriesService.showCategories();
  return res.status(200).json(categories);
});

router.post("categories", (req, res) => {
  try {
    return res.status(201).jsin(req.body);
  } catch (error) {
    console.log.error(error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
