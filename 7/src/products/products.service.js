exports.showProducts = function (param) {
  console.log(param);
  const products = [
    {
      name: "iphone",
      price: 9500,
      category: "Smartphones",
    },
    {
      name: "samsung",
      price: 6500,
      category: "Smartphones",
    },
    {
      name: "monitor",
      price: 3000,
      category: "Monitores",
    },
  ];
  return products.filter((product) => {
    return product.price > param;
  });
};
