function validateCreditNumber(creditNumber) {
  const result = function sumDigits(digits) {
    let num = 0;
    for (let element in digits) {
      num += parseInt(digits[element]);
    }
    return num;
  };
  if (creditNumber.length === 16) {
    let count = 0;
    let y = creditNumber[0];
    for (let i = 1; i < creditNumber.length; i++) {
      if (y !== creditNumber[i]) count++;
    }
    if (count >= 1) {
      if (creditNumber[creditNumber.length - 1] % 2 === 0 && !isNaN(creditNumber)) {
        if (result(creditNumber) > 16) {
          console.log(
            `Success! The input ${creditNumber} is a valid credit card number!`
          );
        } else {
          console.log(
            `Invalid sum of the digits ${creditNumber} should be greater than 16`
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
validateCreditNumber('1111111111111110');