// id user, id product , quality , quanty , total

export class Purchase {
    constructor(
        readonly userId: string,
        readonly productId: string,
        readonly quantity : number,
        readonly total : number
    ){//verificações
        if(typeof userId !== "string") throw new Error("type of 'Userid' must be a string")
        if(typeof productId !== "string") throw new Error("type of 'productId' must be a string")
        if(typeof quantity !== "string") throw new Error("type of 'quantity' must be a number")
        if(typeof total!== "string") throw new Error("type of 'age' must be a number")
    }

    
}