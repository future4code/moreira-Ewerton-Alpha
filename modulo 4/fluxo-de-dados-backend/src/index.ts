import express , {Request,Response}from "express";
import cors from 'cors';
import { produtos, Produtos } from './data';

  

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

//3 eo 7 ao mesmo tempo)

app.post("/addProdutos",(req:Request,res:Response)=> {
  
  
  try{
    // criar logica de possibilidades de informação que podem chegar para nós
  const name = req.body.name
  const price = req.body.price
// pensar em todas maneiras para não quebrar o código
  if (!name || !price ){  // (||) => se algum desses operadores ter valor TRUE 
    throw new Error("um ou mais campos faltando : 'name','price")
  }
  if (typeof name !== "string"){
    throw new Error ("O campo 'Price' deve ser uma string")
  }
  if (typeof price!== "number" || price <=0) {
    throw new Error ("O campo 'price' deve ser um number e maior que zero")
  }
   
  const novoProduto: Produtos = {     //crio um novo produto com id do tipo string a partir do array  e do push
    id: Date.now().toString(),      
    name,
    price
  }
  
    produtos.push(novoProduto)

    res.send(novoProduto)
}   catch (error: any) {              //dÁ UM BIZU NESSA LÓGICA
    switch (error.message) {
      case "Um ou mais campos faltando: 'name', 'price'":
        res.status(422)
        break
      case "O campo 'name' deve ser uma string":
        res.status(422)
        break
      case "O campo 'price' deve ser um number maior que zero":
        res.status(422)
        break
      default:
        res.status(500)
    }
    
  
    res.send(error.message || "Erro inesperado")
   
}

 })
 

//4)
app.get("/produtos",(req:Request,res:Response)=>{
  try{ 
    res.send(produtos)    //se der certo quero resposta produtos
  }catch( error:any){
    res.send(error.message || "Erro inesperado")
  }
})
   
  
//5 e 8 
app.post("/produtos/:id",(req:Request, res :Response)=>{
  try{
    const id = req.params.id
    const newPrice = req.body.price
  }catch{

  }
})

