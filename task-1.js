function isEnoughCapacity(products, containerSize) {
  let totalProducts = 0;

  for (const quantity of Object.values(products)) {
    totalProducts += quantity;
  }

  return totalProducts <= containerSize;
}
