// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  //Helper function f0r caesar function
  function shift(char, amount) {
    char = char.toLowerCase();
    const charCode = char.charCodeAt(0);

    if (charCode < 97 || charCode > 122) return char;
    const newCharCode = ((char.charCodeAt(0) - 71 + amount) % 26) + 97;
    return String.fromCharCode(newCharCode);
  }

  function caesar(input, shiftAmount, encode = true) {
    //guard clause for invalid values of shiftAmount
    //in production code, I would also add checks for correct types and values of input
    if (!shiftAmount || shiftAmount < -25 || shiftAmount > 25) return false;

    //this makes shiftAmount negative if encode is false, since we want to decode
    shiftAmount = encode ? shiftAmount : -shiftAmount;

    return input.split("").reduce((acc, char) => {
      acc += shift(char, shiftAmount);
      return acc;
    }, "");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
