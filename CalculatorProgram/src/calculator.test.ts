import { Calculator } from '../src/calculator'

//Addition
  test('Verify addition.', () => {
      const result:string='4+5';
      const key:string= '=';
      const expectedOutput = 9;
      expect(Calculator.evaluate(result,key)).toBe(expectedOutput);
    });

//substraction
test('Verify substraction.', () => {
  const result='10-5';
  const key:string= '=';
  const expectedOutput = 5;
  expect(Calculator.evaluate(result,key)).toBe(expectedOutput);
});

//multiplication
test('Verify multiplication.', () => {
  const result='4*5';
  const key:string= '=';
  const expectedOutput = 20;
  expect(Calculator.evaluate(result,key)).toBe(expectedOutput);
});

//division
test('Verify division.', () => {
  const result='10/5';
  const key:string= '=';
  const expectedOutput = 2;
  expect(Calculator.evaluate(result,key)).toBe(expectedOutput);
});

//clear text
test('Verify clear text.', () => {
  const result='';
  const key:string= 'c';
  const expectedOutput = '';
  expect(Calculator.evaluate(result,key)).toBe(expectedOutput);
});















//----------------calculateOperation------------------------------

// //Addition
//   test('Verify addition of 4 and 5.', () => {
//       const firstOperand = 4;
//       const secondOperand = 5;
//       const operation='addition';
//       const expectedOutput = 9;
//       expect(Calculator.calculateOperation(firstOperand,secondOperand,operation)).toBe(expectedOutput);
//     });


//   //subtraction
//   test('Verify subtraction of 10 and 5.', () => {
//       const firstOperand = 10;
//       const secondOperand = 5;
//       const operation='subtraction';
//       const expectedOutput = 5;
//       expect(Calculator.calculateOperation(firstOperand,secondOperand,operation)).toBe(expectedOutput);
//     });

//     //multiplication
//   test('Verify multiplication of 4 and 5.', () => {
//     const firstOperand = 4;
//     const secondOperand = 5;
//     const operation='multiplication';
//     const expectedOutput = 20;
//     expect(Calculator.calculateOperation(firstOperand,secondOperand,operation)).toBe(expectedOutput);
//   });

//   //division
//   test('Verify division of 10 and 5.', () => {
//     const firstOperand = 10;
//     const secondOperand = 5;
//     const operation='division';
//     const expectedOutput = 2;
//     expect(Calculator.calculateOperation(firstOperand,secondOperand,operation)).toBe(expectedOutput);
//   });