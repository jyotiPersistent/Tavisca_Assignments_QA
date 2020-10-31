import {reverseNumberUsingWhileLoop} from './reversenumber';
test('Verify for reverse numberl', () => {
    const input = 123;
    const expectedOutput = 321
    expect(reverseNumberUsingWhileLoop(123)).toBe(321);
  });