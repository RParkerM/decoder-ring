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
  function hasNoDuplicates(str) {
    let alphabet = {};
    for (let i = 0; i < str.length; i++) {
      if (alphabet[str[i]]) return false;
      alphabet[str[i]] = true;
    }
    return true;
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26 || !hasNoDuplicates(alphabet))
      return false;
    const lowerInput = input.toLowerCase();
    let result = "";
    for (let i = 0; i < lowerInput.length; i++) {
      const char = lowerInput[i];
      if (encode && isAlpha(char)) result += alphabet[getAlphaPosition(char)];
      else if (!encode && alphabet.indexOf(char) != -1)
        result += getCharFromPosition(alphabet.indexOf(char));
      else result += char;
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
