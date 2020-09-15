  //----------------GetObjectToArray------------------------------
  import { GetSmallestNumber} from '../../Day1/Code/divisible-number'

  test('Verify Divisible Number of 3,5,15 from array.', () => {
      const DivisibleArray=[2, 100, 20, 15, 30, 6, 9, 10, 12, 150];
      let result:string[]=
      [
         "2 is not divisible by 3,5,15",
         "100 is divisible by 5",
         "20 is divisible by 5",
         "15 is divisible by 3,5,15",
         "30 is divisible by 3,5,15",
         "6 is divisible by 3",
         "9 is divisible by 3",
         "10 is divisible by 5",
         "12 is divisible by 3",
         "150 is divisible by 3,5,15",
     ];
      expect(GetSmallestNumber(DivisibleArray)).toStrictEqual(result);
    });
