let validName = (name) => {
  let response = true;

  let splittedName = name.split(" ");
  if (!splittedName[1]) {
    response = false;
  }

  if (splittedName[0].includes(".") && splittedName[0].length == 2) {
    splittedName.forEach((word, index) => {
      if (index !== 0 && index !== splittedName.length - 1) {
        if (!(word.includes(".") && word.length >= 2)) {
          response = false;
        }
      }
    });
  }

  if (
    splittedName[splittedName.length - 1].includes(".") ||
    !(splittedName[splittedName.length - 1].length > 2)
  ) {
    response = false;
  }

  splittedName.forEach((word) => {
    if (word.length == 1) {
      response = false;
    }
    if (word.includes(".") && word.length > 2) {
      response = false;
    }
    if (word[0] !== word[0].toUpperCase()) {
      response = false;
    }
  });

  return response;
};

console.log(validName("A. K. Putri"));
console.log(validName("A. Kesya"));
console.log(validName("A. K. Putri"));
console.log(validName("Angelina K. Putri"));

console.log(validName("Angelina"));
// Must be 2 or 3 words

console.log(validName("a. Kesya"));
// Incorrect capitalization

console.log(validName("A Kesya"));
// Missing dot after initial

console.log(validName("A. Kesya Putri"));
// Cannot have: initial first name + word middle name

console.log(validName("A. Kesya P."));
// Last name cannot be initial

console.log(validName("Angelina. Kesya Putri"));
// Words cannot end with a dot (only initials can)
