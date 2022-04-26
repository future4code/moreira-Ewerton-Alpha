// id , name , description, price

export class Product {
    constructor(
        readonly id : string,
        readonly name : string,
        readonly image_url: string,
        readonly price : number
    ){
        if(typeof id !== "string") throw new Error("type of 'id' must be a string")
        if(typeof name !== "string") throw new Error("type of 'name' must be a string")
        if(typeof image_url!== "string") throw new Error("type of 'image_url' must be a string")
        if(typeof price!== "number") throw new Error("type of 'price' must be a number")
    }
}