const expect = require("chai").expect
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
    it("should return false if input has an uneven number of characters when decoding", () => {
        const input = "this is a test!!";

        const expected = false;
        const actual = polybiusModule.polybius(input, false);
        expect(actual).to.equal(expected);
    })
    it("should return a string when encoding", () => {
        const input = "this is a test";

        const expected = "string";
        const actual = typeof polybiusModule.polybius(input);
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces throughout the encoding/decoding", () => {
    const input = "this is a test";

    const expected = "44324234 4234 11 44513444";
    const actual = polybiusModule.polybius(input);
    expect(actual).to.equal(expected);
    })
    it("should ignore capital letters", () => {
        const input = "THIS IS A TEST";

        const expected = "44324234 4234 11 44513444";
        const actual = polybiusModule.polybius(input);
        expect(actual).to.equal(expected);
    })
    it("should convert both 'i' and 'j' to 42 when encoding", () => {
        const input = "this is ja test";

        const expected = "44324234 4234 4211 44513444";
        const actual = polybiusModule.polybius(input);
        expect(actual).to.equal(expected);
    })
    it("should show both 'i' and 'j' when decoding a message", () => {
        const input = "44324234 4234 4211 44513444";

        const expected = "th(i/j)s (i/j)s (i/j)a test";
        const actual = polybiusModule.polybius(input, false);
        expect(actual).to.equal(expected);
    })
    it("should decode the given input if the encode parameter is set to false", () => {
        const input = "44324234 4234 11 44513444";

        const expected = "th(i/j)s (i/j)s a test";
        const actual = polybiusModule.polybius(input, false);
        expect(actual).to.equal(expected);
    })
});