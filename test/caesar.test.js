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
    it("should return an encoded string where each character is shifted over a specified number of characters", () => {
        const input = "this is a test!";
        const shift = 3;

        const expected = "wklv#lv#d#whvw$";
        const actual = caesarModule.caesar(input, shift);
        expect(actual).to.equal(expected);
    })
});