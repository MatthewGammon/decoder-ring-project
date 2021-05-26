const expect = require("chai").expect
const substitutionModule = require("../src/substitution");

describe("substitution", () => {
    it("should return false if no substitution alphabet is given", () => {
        const input = "This is a test!";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";

        const expected = false;
        const actual = substitutionModule.substitution(input);
        expect(actual).to.equal(expected);
    })
    it("should return false if the substitution alphabet does not contain exactly 26 characters", () => {
        const input = "This is a test!";
        const alphabet = "abcdefghijklmnopqrstuvwxy";
        
        const expected = false;
        const actual = substitutionModule.substitution(input, alphabet);
        expect(actual).to.equal(expected);
    })
    it("should return false if all characters in the substitution alphabet are NOT unique", () => {
        const input = "This is a test!"
        const alphabet = "aabcdefghijklmnopqrstuvwxy";

        const expected = false;
        const actual = substitutionModule.substitution(input, alphabet);
        expect(actual).to.equal(expected);
    })
    it("should ignore captial letters", () => {
        const input = "THIS IS A TEST!";
        const alphabet = "MNBVCXZLKJHGFDSAPOIUYTREWQ";

        const expected = "ulki ki m uciu!";
        const actual = substitutionModule.substitution(input, alphabet);
        expect(actual).to.equal(expected);
    })
    it("should return an encoded message if encode is set to true or not given", () => {
        const input = "This is a test!";
        const alphabet = "MNBVCXZLKJHGFDSAPOIUYTREWQ";

        const expected = "ulki ki m uciu!";
        const actual = substitutionModule.substitution(input, alphabet);

        expect(actual).to.equal(expected);
    })
    it("should return a decoded message if the encode parameter is false", () => {
        const input = "mythril";
        const alphabet = "mnbvcxzlkjhgfdsapoiuytrewq";

        const expected = "auvkwsh";
        const actual = substitutionModule.substitution(input, alphabet, false);
        expect(actual).to.equal(expected);
    })
    it("should maintain special characters when encoding or decoding a message", () => {
        const input = "THI$ i$ a $Pecial Te$T";
        const alphabet = "mnbvcxzlkjhgfdsapoiuytrewq";

        const expected = "ulk$ k$ m $acbkmg uc$u";
        const actual = substitutionModule.substitution(input, alphabet);
        expect(actual).to.equal(expected);

    })
})
