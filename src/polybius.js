// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function encodeString(input) {
    function encodeChar(char) {
      ///We can assume that the the character is a space or letter according to the instructions
      //Without this assumption, we could only modify the result if the character was alpha
      if (char === " ") return char;

      //codes 0-25 = a-z
      let charCode = char.charCodeAt(0) - 97;

      //this ensures that i and j share the same code, and all proceeding characters have the correct code
      //9 is the character code of j
      if (charCode >= 9) charCode -= 1;
      const columnCoord = (charCode % 5) + 1;
      const rowCoord = Math.floor(charCode / 5) + 1;
      return `${columnCoord}${rowCoord}`;
    }
    const lowerInput = input.toLowerCase();

    return lowerInput.split("").reduce((acc, char) => {
      acc += encodeChar(char);
      return acc;
    }, "");
  }

  function decodeString(input) {
    // if string length(excluding spaces) is not a multiple of 2, return false
    // in production code, we would need to make sure it's a valid string by making sure it only contains pairs of numeric characters and spaces
    if (input.replace(" ", "").length % 2 != 0) return false;

    //set up the grid for decoding
    const grid = [];
    grid["1"] = "abcde".split("");
    grid["2"] = ["f", "g", "h", "(i/j)", "k"];
    grid["3"] = "lmnop".split("");
    grid["4"] = "qrstu".split("");
    grid["5"] = "vwxyz".split("");

    function decodeChar(str) {
      return grid[str[1]][parseInt(str[0]) - 1];
    }

    let result = "";
    for (let i = 0; i < input.length; i += 2) {
      if (input[i] === " ") {
        result += " ";

        //This ensures when a space is found, the iterator moves forward 1 instead of 2
        i--;
      } else result += decodeChar(input.slice(i, i + 2)); //slice to decode 2 characters of the string at a time
    }
    return result;
  }

  function polybius(input, encoding = true) {
    if (encoding) {
      return encodeString(input);
    } else {
      return decodeString(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
