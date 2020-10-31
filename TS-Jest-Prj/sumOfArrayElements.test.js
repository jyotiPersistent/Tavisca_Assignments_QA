const sumOfArrayEments = require('./sumOfArrayEments');

test('verify sum of array elements ', () => {
            const input = [1, 2,3];
            const expectedOutput = 6
            expect(sumOfArrayEments(input)).tobe(expectedOutput);
    });
    