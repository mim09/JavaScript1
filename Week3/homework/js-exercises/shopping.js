// Exercise 4: Shopping at the supermarket

'use strict';
const shoppingCart = ["bananas", "milk"];

function addToShoppingCart(element) {
  shoppingCart.push(element);
  if (shoppingCart.length > 3) {
    shoppingCart.shift();
  }
  console.log(`You bought ${shoppingCart.join(", ")}!`);
}
addToShoppingCart("coffee");
addToShoppingCart("tea");
addToShoppingCart("apples");
