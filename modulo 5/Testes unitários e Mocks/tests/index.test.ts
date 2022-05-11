import { isEven } from "../src/index"

describe ("sequencia de testes ",()=>{

test("Testando par", () => { 
    
    const result = isEven(2)
    expect(result).toBe(true) 

   });
});

