//name , email , age , id

export class User {
    constructor(
        readonly id : string,
        readonly name : string,
        readonly email: string,
        readonly password : string
    ){
        if(typeof id !== "string") throw new Error("type of 'id' must be a string")
        if(typeof name !== "string") throw new Error("type of 'name' must be a string")
        if(typeof email !== "string") throw new Error("type of 'email' must be a string")
        if(typeof password!== "string") throw new Error("type of 'age' must be a string")
    }
}