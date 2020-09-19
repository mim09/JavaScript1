// Exercise 3: The recipe card
"use strict";
//create empty object
let recipe = {};
//push values to the object
recipe["Meal name"] = "Omlette";
recipe["Serves"] = "2";
recipe["Ingredients"] = ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"];

//iterate object values from recipe
for (const key in recipe) {
    const recipeValue = recipe[key];
    if (typeof recipeValue === 'string') {
        console.log(key + ": " + recipeValue); 
    }
     else if (Array.isArray(recipeValue)) {  //checks if the recipe value type array is 
        console.log(key + ": " + recipeValue.join(', ')); //prints out he value adding space before it 
    }
 
}

