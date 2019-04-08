const { add } = require("./calculator.js");

// test away!
describe("calculator.js", () => {
  describe("calculator", () => {
    describe("add()", () => {
      it("should add of 2 numbers", () => {
        expect(add(2, 2)).toBe(4);
        expect(add(1, 2)).toBe(3);
        expect(add(-1, 2)).toBe(1);
        expect(add(0, 0)).toBe(0);
      });

      // should return the passed value, if only one value provided
      test("return value if only one value passed", () => {
        expect(add(1)).toBe(1);
        expect(add(99)).toBe(99);
      });

      // should calculate the sum of any number of arguments separated by comma
      test("should calculate the sum of any number of arguments separated by comma", () => {
        expect(add(1, 1, 1)).toBe(3);
        expect(add(1, 1, 1, 1)).toBe(4);
      });

      // should handle and array of numbers
      test("should handle and array of numbers", () => {
        expect(add([1, 1, 1])).toBe(3);
        expect(add([1, 1, 1, 1])).toBe(4);
      });

      it.todo("passing strings");
      it.todo("not passing values");
      it.todo("passing null or undefined or objects or arrays or NaN");
    });
  });
});

// can add 2 and 2
const sum = add(2, 2);

console.log("the sum in: ", sum);

// test case (3 parts)
// test("adds 2 and 2", () => {
//   // Arrange
//   const expected = 4;
//   const value1 = 2;
//   const value2 = 2;

//   // act
//   const sum = add(value1, value2);

//   // Assert
//   expect(sum).toEqual(4);
// });
