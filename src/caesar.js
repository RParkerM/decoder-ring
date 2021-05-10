// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  //Helper function to write cleaner code
  function _shift(char, amount) {
    char = char.toLowerCase();
    const charCode = char.charCodeAt(0);

    if (charCode < 97 || charCode > 122) return char;
    const newCharCode = ((char.charCodeAt(0) - 71 + amount) % 26) + 97;
    return String.fromCharCode(newCharCode);
  }

  function caesar(input, shift, encode = true) {
    let result = "";

    //guard clause for invalid values of shift
    //in production code, I would also add checks for correct types and values of input
    if (!shift || shift < -25 || shift > 25) return false;
    //this makes shift negative if encode is false, since we want to decode
    shift = encode ? shift : -shift;

    return input.split("").reduce((acc, char) => {
      acc += _shift(char, shift);
      return acc;
    }, "");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
