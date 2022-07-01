const findDisappeared = (number) => {
  let missingNumber = [];

  let numberLength = number.length;

  for (i = 1; i <= numberLength; i++) {
    if (!number.includes(i)) {
      missingNumber.push(i);
    }
  }
  return missingNumber;
};

const number = [14, 1, 1, 2, 3, 4, 5, 65, 89, 10, 9, 13];
console.log(findDisappeared(number));
