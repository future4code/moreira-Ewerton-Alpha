import app from "./app";
import connection from "./connection";
import {Request,Response} from 'express'

app.post("/user",async(req:Request,res:Response)=>{
    try { await connection.raw(`
    INSERT INTO TodoListUser 
    VALUES (
        "${req.body.id}",
       "${req.body.name}",
       "${req.body.nickname}",
       "${req.body.email}"
       );`)
    res.status(200).send("user registered successfully")
        
    } catch (error:any) {
        console.log(error.message)
        res.status(500).send("An unexpected error occurred")
    }
})

app.get("user/:id",async(req:Request,res:Response)=>{
    
    
    try {
   const result = await connection.raw(`SELECT * FROM TodoListUser 
   WHERE id = ${req.params.id}`);
      console.table(result[0])
      res.status(200).send(result[0]) ; 
    } catch (error:any) {
        console.table(error.message)
        res.status(500).send("Unexpected error");
    }
});