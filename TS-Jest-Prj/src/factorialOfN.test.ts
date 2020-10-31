import { factorialWithWhile } from '../factorialOfN';

test('Verify for positive integer factorial', () => {
    const input = 5;
    const expectedOutput = 120
    expect(factorialWithWhile(input)).toBe(expectedOutput);
  });

test('verify for negative integer factorial', () => {
    const input = -3;
    const expectedOutput = 'Provide postive integer'
    expect(factorialWithWhile(input)).toBe(expectedOutput);
});

test('verify for zero factorial ', () => {
    const input = 0;
    const expectedOutput = 1
    expect(factorialWithWhile(input)).toBe(expectedOutput);
});
    
// test('verify for string factorial ', () => {
//         const input = 'A';
//         const expectedOutput = 'NaN';
//         expect(factorialWithWhile(input)).toBe(expectedOutput);
// });

// test('verify for decimal number factorial ', () => {
//     const input = '4.5';
//     const expectedOutput = 24
//     expect(factorialWithWhile(input)).toBe(expectedOutput);
// });