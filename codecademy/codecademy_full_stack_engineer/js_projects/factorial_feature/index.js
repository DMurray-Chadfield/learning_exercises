const Calculate = {
  factorial(input) {
    let productCounter = 1;
    for (let i = input; i > 0; i--) {
      productCounter *= i;
    }

    return productCounter;
  }
}

module.exports = Calculate;


