// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function getAlphaPosition(char) {
    const charCode = char.charCodeAt(0);
    return charCode - 97;
  }
  function isAlpha(char) {
    const charCode = char.charCodeAt(0);
    return charCode > 96 && charCode < 123;
  }
  function getCharFromPosition(pos) {
    return String.fromCharCode(pos + 97);
  }
  function hasDuplicates(str) {
    let alphabet = {};
    for (let i = 0; i < str.length; i++) {
      if (alphabet[str[i]]) return true;
      alphabet[str[i]] = true;
    }
    return false;
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26 || hasDuplicates(alphabet))
      return false;
    const lowerInput = input.toLowerCase();

    return lowerInput.split("").reduce((acc, char) => {
      if (encode && isAlpha(char)) acc += alphabet[getAlphaPosition(char)];
      else if (!encode && alphabet.indexOf(char) != -1)
        acc += getCharFromPosition(alphabet.indexOf(char));
      else acc += char;
      return acc;
    }, "");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
