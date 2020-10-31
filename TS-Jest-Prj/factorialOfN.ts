// factorial using while loop
export const factorialWithWhile = ((m: number) => {
    if(m < 0) {
        return 'Please enter positive integer';
        } else {
        if(m==0) {
            return 1;
        } else {
            let i = 1;
            let productOfNumbers: number = 1;
            while(i <= m ) {
                productOfNumbers = productOfNumbers * i;
                i++;
            }
            return productOfNumbers;
        }
    }
})
