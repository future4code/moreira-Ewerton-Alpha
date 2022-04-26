//origin, destination

import {Product} from "./Product"

export class Ticket extends Product {
    constructor(
         id : string,
         name : string,
         description: string,
         price : number,
         readonly origin:string,
         readonly destination:string
    ){
        //super para acessar as informações acima
        super(id,name,description,price)

        if(typeof origin !== "string") throw new Error("type of 'origin' must be a string")
        if(typeof description !== "string") throw new Error("type of 'description' must be a string")


    }
}