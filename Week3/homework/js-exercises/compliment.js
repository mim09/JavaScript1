// Exercise 1 Give Compliment
"use strict";
//create a function and declare an array with in
function giveCompliment(name) {
  const compliments = [
    "brave",
    "awesome",
    "patient",
    "couragius",
    "smart",
    "great",
    "lovable",
    "creative",
    "persistent",
    "genius",
  ];
  let randomSelection = Math.floor(Math.random() * 10); //select random number and round it.
  console.log(`"You are ${compliments[randomSelection]}, ${name}!" `); //print out random element from the array
}
giveCompliment("ayda");
giveCompliment("ayda");
giveCompliment("ayda");
