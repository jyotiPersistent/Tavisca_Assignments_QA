const cloneArray = require('./CloneArray');

test('Properly clones array ', () => {
const array= [1,2,3,4,5];
expect(cloneArray(array)).toEqual(array)

});