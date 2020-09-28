// Exercise 3: Be your own fortune teller
"use strict";
//declare arrays
const numChildren = [5, 2, 3, 1, 4];
const partnerNames = ["Mattew", "Belay", "Nolan", "Paul", "James"];
const locations = ["Amsterdam", "Paris", "AddisAbeba", "Newyork", "Berlin"];
const jobs = [
  "Secretary",
  "teacher",
  "Software Developer",
  "Web Designer",
  "Web Developer",
];
//create a function that returns random selection from an array
// const rando = (array) =>
function rando(array) {
  let rand = Math.round(Math.random(array.length));
  return array[rand];
}
//a function with four arguments that calls the above function to print out random selection from arrays
function tellfortune(a, b, c, d) {
  console.log(
    `You will be a ${rando(jobs)} in ${rando(locations)}, married to ${rando(
      partnerNames
    )} with ${rando(numChildren)} kids.`
  );
}
tellfortune(numChildren, partnerNames, locations, jobs);
tellfortune(numChildren, partnerNames, locations, jobs);
