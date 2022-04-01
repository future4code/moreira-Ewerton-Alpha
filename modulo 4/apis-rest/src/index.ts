import express, {  Request, Response } from 'express';
import cors from 'cors';
import { users} from './data'
import {user , userType}  from './data'

  

const app = express();

app.use(express.json());
app.use(cors());



app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});



//1)
app.get('/users',(req,res)=>{
    const lista = users 
    return  res.status(200).send(lista)
})


//2)
// como eu tinha tentado 
// app.get('/lista/type',(req,res)=>{
//     let codeError:number = 400
    
//     try {
//       const tipo = req.query.tipo as string
//       const usuario: user | undefined = users.find((user) =>user.type === "ADMIN" )
//       if(!usuario){
//           codeError = 404   
//           throw new Error('user not found')
//       }
//       res.status(200).send(usuario)
//     } catch(error){
//         res.status(codeError).send({message:Error})
//     }
    
// })

//2)
app.get('/users/type',(req:Request,res:Response)=> {
 try { let type = req.query.type as string       // disse a ela que é do tipo string

    if(type){
      type = type.toUpperCase()
      if(type in userType){                           // O in operador retorna true se a propriedade especificada estiver no objeto especificado ou em sua cadeia de protótipos
        const result = users.filter(user => user.type === type)
        return res.status(200).send(result)
    }
       throw new Error ("invalid type")
    }   
} catch(error){
  res.status(400).send(Error )
 }
})
