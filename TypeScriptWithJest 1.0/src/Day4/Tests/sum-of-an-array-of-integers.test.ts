  //----------------getSumOfArrayOfIntegersWithWhileLoop------------------------------
  import { getSumOfArrayOfIntegersWithWhileLoop } from '../../Day4/Code/sum-of-an-array-of-integers'

  test('Verify sum of array from integer 1 to 5.', () => {
      const input = [1, 2, 3, 4, 5 ];
      const expectedOutput = 15;
      expect(getSumOfArrayOfIntegersWithWhileLoop(input)).toBe(expectedOutput);
    });
  
    test('Verify sum of array from integer 1 to 3.', () => {
      const input = [1, 2, 3];
      const expectedOutput = 6;
      expect(getSumOfArrayOfIntegersWithWhileLoop(input)).toBe(expectedOutput);
    });
  
    test('Verify sum of array from integer 1 to -3.', () => {
      const input = [-3,-2,-1,0,1, 2, 3 ];
      const expectedOutput = 6;
      expect(getSumOfArrayOfIntegersWithWhileLoop(input)).toBe(expectedOutput);
    });

      //----------------getSumOfArrayOfIntegersWithInbuiltFunction------------------------------
  import { getSumOfArrayOfIntegersWithInbuiltFunction } from '../../Day4/Code/sum-of-an-array-of-integers'

  test('Verify sum of array from integer 1 to 5.', () => {
      const input = [1, 2, 3, 4, 5 ];
      const expectedOutput = 15;
      expect(getSumOfArrayOfIntegersWithInbuiltFunction(input)).toBe(expectedOutput);
    });
  
    test('Verify sum of array from integer 1 to 3.', () => {
      const input = [1, 2, 3];
      const expectedOutput = 6;
      expect(getSumOfArrayOfIntegersWithInbuiltFunction(input)).toBe(expectedOutput);
    });
  
    test('Verify sum of array from integer 1 to -3.', () => {
      const input = [-3,-2,-1,0,1, 2, 3];
      const expectedOutput = 6;
      expect(getSumOfArrayOfIntegersWithInbuiltFunction(input)).toBe(expectedOutput);
    });