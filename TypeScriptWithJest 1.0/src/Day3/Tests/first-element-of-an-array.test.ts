  /* Assignment 1:
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
*/
  //----------------GetFirstElementOfArrayInTraditionalWay------------------------------
  import { GetFirstElementOfArrayInTraditionalWay} from '../../Day3/Code/first-element-of-an-array'

  test('Verify first element of array for ([7, 9, 0, -2])', () => {
      const elementArray = [7, 9, 0, -2];
      var number;
      const expectedOutput = 7;
      expect(GetFirstElementOfArrayInTraditionalWay(elementArray,number)).toBe(expectedOutput);
    });
  
    test('Verify first element of array for ([],3)', () => {
      const elementArray = [];
      var number=3;
      const expectedOutput = [];
      expect(GetFirstElementOfArrayInTraditionalWay(elementArray,number)).toStrictEqual(expectedOutput);
    });
  
 