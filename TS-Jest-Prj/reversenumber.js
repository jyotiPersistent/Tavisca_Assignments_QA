function reverseNumberUsingWhileLoop(n) {
    var remainder, tempNumber, reversedNumber = 0;
    tempNumber = n;
    while (tempNumber > 0) {
        remainder = tempNumber % 10;
        tempNumber = Math.floor(tempNumber / 10);
        reversedNumber = reversedNumber * 10 + remainder;
    }
    return reversedNumber;
}

module.export = reverseNumberUsingWhileLoop;