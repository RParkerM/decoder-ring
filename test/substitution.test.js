const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  const alphabet = "plmoknijbuhvygctfxrdzeswaq";
  it("should exist", () => {
    expect(substitution).to.be.a("function");
  });
  it("should return false if given alphabet isn't exactly 26 characters long", () => {
    const smallAlphabet = substitution("message", "abc");
    const largeAlphabet = substitution(
      "message",
      "abcdefghijklmnopqrstuvwxyz."
    );
    expect(smallAlphabet).to.be.false;
    expect(largeAlphabet).to.be.false;
  });
  it("should return false if duplicate characters are found in alphabet", () => {
    const result = substitution("message", "abcdefghijklmnopqrstuvwxya");
    expect(result).to.be.false;
  });
  it("should correctly translate", () => {
    const result = substitution("message", alphabet);
    expect(result).equals("ykrrpik");
  });
  it("should maintain spaces in the message, before and after encoding or decoding", () => {
    const encodeResult = substitution("mes sage", alphabet);
    expect(encodeResult).equals("ykr rpik");
    const decodedResult = substitution(encodeResult, alphabet, false);
    expect(decodedResult).equals("mes sage");
  });
  it("should ignore capital letters", () => {
    const uppercase = substitution("A Message", alphabet);
    const lower = substitution("a message", alphabet);
    expect(uppercase).equals(lower);
  });
  it("should work with any kind of key with unique characters", () => {
    const symbolAlph = "!@#$%^" + alphabet.slice(6);
    const result = substitution("A Message", symbolAlph);
    expect(result).equals("! y%rr!i%");
    const decoded = substitution(result, symbolAlph, false);
    expect(decoded).equals("a message");
  });
});
