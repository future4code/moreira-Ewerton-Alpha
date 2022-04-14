import express, {Request,Response} from 'express'; 
import cors from 'cors';
import {users}  from './data';


  

const app = express();

app.use(express.json());
app.use(cors());


//1 )
//a) Metodo Get : para "Pegar a informação"
//b)Entidades  é o caminho para acessar as taberlas do banco , no Express
//é representado pelo path ---- sintaxe ----> app.metodo(/"users")

//1)
app.get("/user",(req:Request, res:Response)=>{
   
})












app.listen(3003, () => {
  console.log("Backend rodando na porta 3003!");
});
