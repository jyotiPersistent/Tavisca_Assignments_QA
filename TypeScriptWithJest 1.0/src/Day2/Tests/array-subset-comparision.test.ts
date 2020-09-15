  //----------------CheckSubsetArray------------------------------
  import { CheckSubsetArray} from '../../Day2/Code/array-subset-comparision'

  const array = [
    [1,2,3,4,5,6],
    [4,3,5,6],
    [4,3,5,6],
    [3,4,5,6,7,8],
    [4,3,5,7]
];

  test('Verify if array B is subset of array A.', () => {      
      const expectedOutput = 'Array B is subset of Array A';
      expect(CheckSubsetArray(array[0], array[1])).toBe(expectedOutput);
    });

    test('Verify if array A is subset of array B.', () => {      
        const expectedOutput = 'Array A is subset of Array B';
        expect(CheckSubsetArray(array[2], array[3])).toBe(expectedOutput);
    });

    test('Verify if Array A and B are same.', () => {      
        const expectedOutput = 'Array A is same as Array B';
        expect(CheckSubsetArray(array[1], array[2])).toBe(expectedOutput);
    });

    test('Verify if Array A and B are not equal.', () => {      
        const expectedOutput = 'Array A and Array B are not equal.';
        expect(CheckSubsetArray(array[2], array[4])).toBe(expectedOutput);
    });