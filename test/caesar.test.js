const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should exist", () => {
    expect(caesar).to.be.a("function");
  });
  it("should return false for invalid values of shift", () => {
    expect(caesar("", 0)).to.be.false;
    expect(caesar("", -26)).to.be.false;
    expect(caesar("", 26)).to.be.false;
  });

  it("handles shifts that go past the alphabet", () => {
    const encodedMessage = caesar("Zebra Magazine", 3);
    const decodedMessage = caesar("cheud pdjdclqh", 3, false);
    expect(encodedMessage).equals("cheud pdjdclqh");
    expect(decodedMessage).equals("zebra magazine");
  });
  it("should encode correctly", () => {
    const encodedMessage = caesar("abc", 1);
    expect(encodedMessage).equals("bcd");
  });
  it("should allow for a negative shift that will shift to the left", () => {
    const negativeShift = caesar("abcde", -1);
    expect(negativeShift).equals("zabcd");
  });
  it("should preserve spaces and symbols in encoding and decoding", () => {
    const encodedMessage = caesar(" a b c d!@#$%^&*(", 1);
    const decodedMessage = caesar(" b c d e!@#$%^&*(", 1, false);
    expect(encodedMessage).equals(" b c d e!@#$%^&*(");
    expect(decodedMessage).equals(" a b c d!@#$%^&*(");
  });
  it("should allow decoding", () => {
    const encodedMessage = caesar("wklqnixo", 3, false);
    expect(encodedMessage).equals("thinkful");
  });
  it("should ignore capital letters", () => {
    const encodedMessage = caesar("This is a secret message!", 8);
    expect(encodedMessage).equals("bpqa qa i amkzmb umaaiom!");
    const capsMessage = caesar("A Message");
    const lowerCaseMessage = caesar("a message");
    expect(capsMessage).equals(lowerCaseMessage);
  });
});
