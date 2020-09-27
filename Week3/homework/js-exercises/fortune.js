// Exercise 3: Be your own fortune teller
'use strict';
const numChildren = [5, 2, 3, 1, 4]; 
const partnerNames = ["Mattew", "Belay", "Nolan", "Paul", "James"];
const locations = ["Amsterdam", "Paris", "AddisAbeba", "Newyork", "Berlin"];
const jobs = [
  "Secretary", "teacher", "Software Developer", "WebDesigner", "Web Developer"];
function rando(array) {
  let rand = Math.round(Math.random(array.length));
  return array[rand];
}
function tellfortune(a, b, c, d) {
  console.log(`You will be a ${rando(jobs)} in ${rando(locations)}, married to ${rando(partnerNames)} with ${rando(numChildren)} kids.`);
}
tellfortune(numChildren, partnerNames, locations, jobs);
tellfortune(numChildren, partnerNames, locations, jobs);
tellfortune(numChildren, partnerNames, locations, jobs);
tellfortune(numChildren, partnerNames, locations, jobs);
