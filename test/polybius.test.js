const expect = require("chai").expect
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
    it("should return false if input has an uneven number of characters when decoding", () => {
        const input = "this is a test!!";

        const expected = false;
        const actual = polybiusModule.polybius(input, false);
        expect(actual).to.equal(expected);
    })
    it("")
})