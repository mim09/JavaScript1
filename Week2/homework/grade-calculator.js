//A function that prints out grade and the resultue of result if the condition of the if / of else if fulfills
function grade(result) {
  let grade;
  if (result >= 0 && result <= 49) {
    grade = "F";
  } else if (result >= 50 && result <= 59) {
    grade = "E";
  } else if (result >= 60 && result <= 69) {
    grade = "D";
  } else if (result >= 70 && result <= 79) {
    grade = "C";
  } else if (result >= 80 && result <= 89) {
    grade = "B";
  } else if (result >= 90 && result <= 100) {
    grade = "A";
  } else {
    console.log("result must be a number between 0 and 100"); //prints out what the value of result should be.
  }
  console.log(`You got ${grade} (${result}%)!`); //prints out the final grade 
}
//calling the function grade()
grade(98);
grade(42);
grade(62);
grade(72);
