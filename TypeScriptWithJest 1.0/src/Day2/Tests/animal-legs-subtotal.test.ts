  //----------------CheckSubsetArray------------------------------
  import { getTotalLegsCountForAllAnimals} from '../../Day2/Code/animal-legs-subtotal'

  const animal:any[]=
  [
      ['chicken',5],
      ['cow',6],
      ['pig',3]
  ];

  test('Verify Total number of animal legs count for all animals.', () => {      
      const expectedOutput = 46;
      expect(getTotalLegsCountForAllAnimals(animal)).toBe(expectedOutput);
    });
