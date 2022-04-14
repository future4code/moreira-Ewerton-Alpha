import express , {Request,Response}from "express";
import cors from 'cors';
import { produtos } from './data';

  

const app = express();

app.use(express.json());
app.use(cors());




app.listen(3003, () => {
  console.log("O backend está rodando na porta 3003! :)");
})

//1)

app.get("/test",(req:Request , res:Response)=>{
  return res.status(200).json({mesage:"Requisição com Feita com Sucesso"})
})

//2) Feita mo Data.ts 

//3)

app.post("/adicionaProdutos",(req:Request,res:Response)=> {
  const addProdutos = {
     
    id:Date.now().toString(),
    name: req.body.name,
    price: req.body.price,
  }
  
  const novaListaProdutos = [...produtos, addProdutos];
  return res.status(200).send(novaListaProdutos);
})
   
    


