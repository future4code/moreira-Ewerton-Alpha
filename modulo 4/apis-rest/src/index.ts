import express, {  Request, Response } from 'express';
import cors from 'cors';
import {users} from './data'

  

const app = express();

app.use(express.json());
app.use(cors());



app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});



//1)
app.get('/lista',(req,res)=>{
    const lista = users 
    return  res.status(200).send(lista)
})


//2)

app.get('/lista/:type',(req,res)=>{
    try {
// usar o find para pegar apenas um elemento
    }catch{

    }
    
})

