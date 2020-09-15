  //----------------GetObjectToArray------------------------------
  import { GetObjectToArray} from '../../Day2/Code/object-to-array-conversion'

  

  test('Verify if Converted object to array in key-value pair is not empty.', () => { 
    const arrObject = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };       
      const expectedOutput = [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]];
      expect(GetObjectToArray(arrObject)).toStrictEqual(expectedOutput);
    });

    test('Verify if Converted object to array in key-value pair is empty.', () => {  
        const emptyObject = { };     
        const expectedOutput = [];
        expect(GetObjectToArray(emptyObject)).toStrictEqual(expectedOutput);
      });