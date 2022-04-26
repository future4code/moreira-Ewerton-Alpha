import { Request, Response } from "express";
import { BaseDatabase } from "../../data/BaseDatabase";
import { UserDataBase } from "../../data/users/UserDataBase";
import { User } from "../../entities/User";
import { IdGeneretor } from "../../services/idGenerator";

export const createUser = async (req:Request,res:Response)=>{
    try {
        const {name , email, password } = req.body
        const id = new IdGeneretor().execute()
        const database = new UserDataBase

        //enviar essas infos pro db
        const newUser = new User(
            id,
            name,
            email,
            password
        )
       
       const findEmail = await database.getUserByEmail(email)
       if (findEmail) throw new Error("Email already exists")

       await database.createUser(newUser)

       res.status(201).send({newUser})

    } catch (err: any) {
        res.status(500).send({message:err.message})
    }
}