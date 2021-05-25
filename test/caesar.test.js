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
    it("if encode is false, it decodes the inputted message", () => {
        const input = "abc first three should fail!";
        const shift = 3;

        const expected = "xyz cfopq qeobb pelria cxfi!";
        const actual = caesarModule.caesar(input, shift, false);
        expect(actual).to.equal(expected);
    })
    it("is a function", () => {
        const expected = "function";
        const actual = typeof caesarModule.caesar;
        expect(actual).to.equal(expected);
    })
    it("should wrap around 'z' and begin shifting back at 'a' if the shift would push the value past 'z',", () => {
        const input = "Thiz iz a tezt!";
        const shift = 3;

        const expected = "wklc lc d whcw!";
        const actual = caesarModule.caesar("Thiz iz a tezt!", 3, true);
        expect(actual).to.equal(expected);
    })
    it("should successfully encode a message if passed in a shift value that is negative", () => {
        const input = "This is a test!";
        const shift = -3;

        const expected = "qefp fp x qbpq!";
        const actual = caesarModule.caesar("This is a test!", -3, true);
        expect(actual).to.equal(expected);
    })
});