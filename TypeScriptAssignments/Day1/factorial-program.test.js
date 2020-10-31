
import{factorialNumberWithWhileLoop,factorialNumberWithForLoop} from"./factorial-program"
 
test("test 1",()=>{
expect(factorialNumberWithWhileLoop).toBe(21)
})
 
test("test 2 ",()=>{
expect(factorialNumberWithForLoop).toBe(19)
})

