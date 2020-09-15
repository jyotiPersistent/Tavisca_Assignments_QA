  //----------------GetSmallestNumber------------------------------
  import { GetSmallestNumber } from '../../Day1/Code/smallest-number'

  const ArrayName =['A', 'B'];

  test('Verify Smallest number in array A is:0', () => {
      const ArrayA=[100, 2, 5, 12, 0];
      const expectedOutput = 0;
      expect(GetSmallestNumber(ArrayName[0],ArrayA)).toBe(expectedOutput);
    });

    test('Verify Smallest number in array B is: -30', () => {
        const ArrayB= [-5, -10 , 100, 20, 30, -30, 12];
        const expectedOutput = -30;
        expect(GetSmallestNumber(ArrayName[1], ArrayB)).toBe(expectedOutput);
      });