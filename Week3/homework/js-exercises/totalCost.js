// Exercise 5: Total cost
"use strict";
const cartForParty = {
  wine: 7.56,
  cola: 4.5,
  chips: 5.49,
  beer: 3.98,
  nuts: 2.99,
};
function calculateTotalPrice(total) {
  total = 0;
  for (const y in cartForParty) //iterates through the object
    total += cartForParty[y]; //adds each price in the object to total
  console.log(`Total €${total.toFixed(2)}`); //prints out the total price with only two digits after decimal point
}
calculateTotalPrice(cartForParty);
