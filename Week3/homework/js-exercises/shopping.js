// Exercise 4: Shopping at the supermarket
"use strict";
const shoppingCart = ["bananas", "milk"];
const addToShoppingCart = (element) => {
  shoppingCart.push(element); // adds element to array
  if (shoppingCart.length > 3) {
    // checks if more than three items are in the array
    shoppingCart.shift(); //deletes the first item
  }
  console.log(`You bought ${shoppingCart.join(", ")}!`);
};
addToShoppingCart("coffee");
addToShoppingCart("tea");
addToShoppingCart("apples");
