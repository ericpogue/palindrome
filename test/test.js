let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function () {
  //  Phrase#palindrome
  describe("#palindrome", function () {
    it("should return false for a non-palindrome", function () {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return false for an empty string", function () {
      let emptyPhrase = new Phrase("");
      assert(!emptyPhrase.palindrome());
    });

    // Letters#pailndrome
    describe("#letters", function () {
      it("should return only letters", function () {
        let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
        assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
      });
    });

    it("should return the empty string only on no match", function () {
      let noLetters = new Phrase("1234.56");
      assert.strictEqual(noLetters.letters(), "");
    });

    it("should return true for a palindrome", function () {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", function () {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    });

    it("should return true for a palindrome with punctuation", function () {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual("MadamImAdam", punctuatedPalindrome.letters());
    });
  });
});
