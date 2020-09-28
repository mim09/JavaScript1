// 4. PROJECT: Credit Card Validator
"use strict";
//create a function called validatecreditNumber
function validateCreditNumber(creditNumber) {
  //create a function that return the total sum of the digits
  const sumDigits = (digits) => {
    let num = 0;
    for (let element in digits) {
      num += parseInt(digits[element]);
    }
    return num;
  };
  //checks if the input has 16 characters
  if (creditNumber.length === 16) {
    let count = 0; //to count how many times the inputs reapears
    let y = creditNumber[0];
    for (let i = 1; i < creditNumber.length; i++) {
      if (y !== creditNumber[i]) count++;
    }
    //checkst for two different inputs
    if (count >= 1) {
      //checks if all inputs are numbers and the last digit is even number
      if (!isNaN(creditNumber)) {
        //calls the above function to check if the sum of all inputs gives greater than 16
        if (sumDigits(creditNumber) > 16) {
          if (creditNumber[creditNumber.length - 1] % 2 === 0) { //checks if the last digit is even
            console.log(
              `Success! The input ${creditNumber} is a valid credit card number!`
            );
          } else {
            console.log(
              `Invalid! The input's ${creditNumber} last digit should be even number!`
            );
          }
        } else {
          console.log(
            `Invalid! The total sum of the digits ${creditNumber} should be greater than 16!`
          );
        }
      } else {
        console.log(
          `Invalid! The input ${creditNumber} should contain only numbers!`
        );
      }
    } else {
      console.log(
        `Invalid! The input ${creditNumber} should contain at least 2 different types of numbers!`
      );
    }
  } else {
    console.log("Invalid number! the input should be 16 characrters");
  }
}
validateCreditNumber("6666666666661668");
validateCreditNumber("a92332119c011112");
validateCreditNumber("4444444444444444");
validateCreditNumber("1111111111111110");
