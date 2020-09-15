 //----------------GetreversedNumberInTraditionalWay------------------------------
 import { GetreversedNumberInTraditionalWay} from '../../Day3/Code/reverse-a-number'

 test('Verify reverse number of an array ("54321")', () => {
     const inputString = '54321'; 
     const expectedOutput ='12345';
     expect(GetreversedNumberInTraditionalWay(inputString)).toBe(expectedOutput);
   });

    //----------------GetreversedNumberByInbuiltFunction------------------------------
 import { GetreversedNumberByInbuiltFunction} from '../../Day3/Code/reverse-a-number'

 test('Verify reverse number of an array ("54321")', () => {
     const inputString = '54321'; 
     const expectedOutput ='12345';
     expect(GetreversedNumberByInbuiltFunction(inputString)).toBe(expectedOutput);
   });