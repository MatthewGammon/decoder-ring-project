const expect = require("chai").expect;
const caesarModule = require("../src/caesar");


describe("caesar", () => {
    it("should return false if the shift value is equal to 0, less than -25, or greater than 25", () => {
        const input = "this is a test!";
        const shift = -26;
        const expected = false;
        const actual = caesarModule.caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters and return in all lowercase", () => {
        const input = "THIS IS A TEST!";
        const shift = 3;

        const expected = "wklv lv d whvw!";
        const actual = caesarModule.caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it("maintains spaces and other nonalphabetic symbols in the message", () => {
        const input = "This is a test!";
        const shift = 3;

        const expected = "wklv lv d whvw!";
        const actual = caesarModule.caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it("if encode is true, it encodes the inputted message", () => {
        const input = "This is a test!";
        const shift = 3;

        const expected = "wklv lv d whvw!";
        const actual = caesarModule.caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it("if encode is false, it returns an empty string", () => {
        const input = "This is a test!";
        const shift = 3;

        const expected = "";
        const actual = caesarModule.caesar(input, shift, false);
        expect(actual).to.equal(expected);
    })
    it("is a function", () => {
        const expected = "function";
        const actual = typeof caesarModule.caesar;
        expect(actual).to.equal(expected);
    })
});