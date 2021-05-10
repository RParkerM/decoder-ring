// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const grid = [];
  grid["1"] = ["", ..."abcde".split("")];
  grid["2"] = ["", "f", "g", "h", "(i/j)", "k"];
  grid["3"] = ["", ..."lmnop".split("")];
  grid["4"] = ["", ..."qrstu".split("")];
  grid["5"] = ["", ..."vwxyz".split("")];

  function _encode(char) {
    ///We can assume that the the character is a space or letter according to the instructions
    //Without this assumption, we could only modify the result if the character was alpha
    if (char === " ") return char;
    char = char.toLowerCase();
    let charCode = char.charCodeAt(0) - 97;
    if (charCode >= 9) charCode -= 1;
    const columnCoord = (charCode % 5) + 1;
    const rowCoord = Math.floor(charCode / 5) + 1;
    return `${columnCoord}${rowCoord}`;
  }

  function _decode(str) {
    //this sets up the grid, extra "" is there to

    // console.log(str, grid[str[1]][parseInt(str[0])]);
    return grid[str[1]][parseInt(str[0])];
  }

  function polybius(input, encode = true) {
    let result = "";
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") result += " ";
        else {
          result += _encode(input[i]);
        }
      }
    } else {
      if (input.replace(" ", "").length % 2 != 0) return false;
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === " ") {
          result += " ";
          i--;
        } else result += _decode(input.slice(i, i + 2));
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
