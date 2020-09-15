  //----------------getFactorialNumberRecursive------------------------------
import { getFactorialNumberRecursive } from '../../Day4/Code/factorial-program'

test('Verify factorial for positive integer value 5.', () => {
    const input = 5;
    let factorialNumberRecursive:number=1;
    const expectedOutput = 120;
    expect(getFactorialNumberRecursive(input,factorialNumberRecursive)).toBe(expectedOutput);
  });

  test('Verify factorial for integer value 0.', () => {
    const input =0;
    let factorialNumberRecursive:number=1;
    const expectedOutput = 1;
    expect(getFactorialNumberRecursive(input,factorialNumberRecursive)).toBe(expectedOutput);
  });

  //----------------getFactorialNumberWithForLoop------------------------------

  import { getFactorialNumberWithForLoop } from '../../Day4/Code/factorial-program'

test('Verify factorial for positive integer value 5.', () => {
    const input = 5;
    const expectedOutput = 120;
    expect(getFactorialNumberWithForLoop(input)).toBe(expectedOutput);
  });

  test('Verify factorial for integer value 0.', () => {
    const input =0;
    const expectedOutput = 1;
    expect(getFactorialNumberWithForLoop(input)).toBe(expectedOutput);
  });

