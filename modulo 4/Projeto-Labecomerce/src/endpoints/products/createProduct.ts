import { ProductDatabase } from '../../data/products/ProductDatabase';
import { Ticket } from '../../entities/Ticket';
import { IdGeneretor } from '../../services/idGenerator';
import { Request,Response } from "express"
import { Product } from '../../entities/Product';

export const createProduct = async(req:Request, res:Response)=>{

    try {
        const { name, price , image_url,origin,destination} = req.body
        const id = new IdGeneretor().execute()
        const database = new ProductDatabase
   
        // duas opções de entrada : Produto ou ticket 

     const newProduct = origin && destination 
              ? new Ticket(id,name ,price,image_url,origin,destination)  //para o caso de esistir as informaccoes
              : new Product(id ,name , price , image_url )               // se não                 



               await database.createProduct(newProduct)

               res.status(201).send({product: newProduct})

    } catch (err:any) {
        
        res.status(500).send({message:err.message})
    }


}       
