const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should exist", () => {
    expect(polybius).to.be.a("function");
  });
  it("should encode correctly", () => {
    const encodedString = polybius("message");
    expect(encodedString).equals("23513434112251");
  });
  it("should return encoded message as a string", () => {
    const result = polybius("message");
    expect(result).to.be.a.string;
  });
  it("should translate the letters i and j to 42", () => {
    const iResult = polybius("i");
    expect(iResult).equals("42");
    const jResult = polybius("j");
    expect(jResult).equals("42");
  });
  it("should decode 42 to (i/j)", () => {
    const decodedString = polybius("42", false);
    expect(decodedString).equals("(i/j)");
    const thinkfulString = polybius("4432423352125413", false);
    expect(thinkfulString).equals("th(i/j)nkful");
  });
  it("should ignore capital letters", () => {
    const capsResult = polybius("A Message");
    const lowerResult = polybius("a message");
    expect(capsResult).equals(lowerResult);
  });
  it("should maintain spaces after encoding and decoding", () => {
    const result = polybius("a message");
    expect(result).equals("11 23513434112251");
    const decodedResult = polybius(result, false);
    expect(decodedResult).equals("a message");
  });
  it("when decoding, should return false if string length without spaces is odd", () => {
    const result = polybius("11221 ", false);
    expect(result).to.be.false;
  });
});
