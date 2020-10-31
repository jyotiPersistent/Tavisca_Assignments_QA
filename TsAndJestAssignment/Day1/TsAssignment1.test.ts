import{sumOfArrayTraditionalLogic,sumOfArrayBuiltIn} from "./TsAssignment1"

test("test 1",()=>{
    expect(sumOfArrayTraditionalLogic).toBe(21)
})

test("test 2 ",()=>{
    expect(sumOfArrayBuiltIn).toBe(21)
})