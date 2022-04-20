import express, { Express ,Request , Response} from "express";
// import connection from "../connection"
import{connection}  from "../app"


export default async function createUsers (
    req:Request,
    res:Response
):Promise<void>{

    try{
        const { username , email , pwd } = req.body
        
        await connection ("labecommerce_users")
        .insert({username,email ,pwd})
         
        res.status(201).end()
    } catch (error){
        res.status(500).end()
    }
    
}
