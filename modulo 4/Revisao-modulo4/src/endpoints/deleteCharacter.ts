import {Request,Response} from "express"
import { characters} from "../data"

export default function deleteCharacter(
    req:Request,
    res:Response
):void{
     //parametros id é do tipo variavel
    const{ id } = req.params as { id: string }
    
    const index :number = characters.findIndex(
    character => character.id === Number(id) 
    )
    
    if (index > -1) characters.splice(index, 1)

    res.status(200).end()
}