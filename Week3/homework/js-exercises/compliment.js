// Exercise 1 Give Compliment
"use strict";
//create a function 
function giveCompliment(name) {
  const myArray = [
    "brave",
    "awesome",
    "patient",
    "couragius",
    "smart",
    "great",
    "lovable",
    "creative",
    "persistent",
    "genius"
  ];
  let randomSelection = Math.floor(Math.random()*10); //select random number and round it.
  console.log(`"You are ${myArray[randomSelection]}, ${randomSelection} ${name}!" `); //print out random element from the array
}

giveCompliment("ayda");
giveCompliment("ayda");
giveCompliment("ayda");
