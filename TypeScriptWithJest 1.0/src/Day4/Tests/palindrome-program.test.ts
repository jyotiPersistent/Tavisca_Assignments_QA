  //----------------isPalindrome------------------------------

import { isPalindrome } from '../../Day4/Code/palindrome-program'

test('Verify for palindrom string.', () => {
    const input = 'madam';
    const expectedOutput = true;
    expect(isPalindrome(input)).not.toBe(false);
    expect(isPalindrome(input)).not.toBeFalsy();
    expect(isPalindrome(input)).toBeTruthy();
    expect(isPalindrome(input)).toBe(expectedOutput);
  });

  test('Verify for non palindrom string.', () => {
    const input = 'nurses';
    const expectedOutput = false;
    expect(isPalindrome(input)).toBe(expectedOutput);
    expect(isPalindrome(input)).toBe(false);
    expect(isPalindrome(input)).toBeFalsy();
    expect(isPalindrome(input)).not.toBeTruthy();
  });