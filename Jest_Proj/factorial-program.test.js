
const getFactorialNumberRecursive = require('./getFactorialNumberRecursive');

test('1. [Recursive Method] The factorial number  is ', () => {
    expect(getFactorialNumberRecursive(5)).not.toBeNull();
    expect(getFactorialNumberRecursive(5)).toBeDefined();
    expect(getFactorialNumberRecursive(5)).not.toBeUndefined();  
    expect(getFactorialNumberRecursive(5)).not.toBe(0); 
    expect(getFactorialNumberRecursive(5)).toBe(120);
});