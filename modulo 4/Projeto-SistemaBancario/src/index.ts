
//importando express com Reques e Response
import express, { Request, Response } from 'express';
import cors from 'cors';

  
// extra: importando configuracao de rede do node 
import { AddressInfo } from 'net';
//iniciando aplicacao com express
const app = express();

//ativandoos módulos de Bodyparser e cors/
app.use(express.json());
app.use(cors());



// app.listen(3003, () => {
//     console.log("Backend rodando na porta 3003!");
// });

const server = app.listen(process.env.PORT || 3003,()=>{
if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`)
}else {
    console.error(`Failure unpon starting server.`)
}
})


//1)
type User = {
   nome :  string,
   cpf: number ,
   dataNasc:number
}
   

   

//2)

const user :User []= [
   { nome : "ewerton" , cpf: 123456789, dataNasc:23051990},
   { nome : 'mario' , cpf: 741852963, dataNasc:23051990},
   { nome : 'luis' , cpf: 963852741, dataNasc:23051990}
  ]
 

  //3)
type Transacao = {
   valor : number ,
   data : number 
}
  
  
  
  const transacao :Transacao [] =[
   {valor:200 , data :140222},
   {valor:100 , data :150222},
   {valor:300, data :160222}
  ]
  




  //5)adicionou um Usuario no Postaman + não acrescentou na lista
  app.post("/user",(req:Request,res:Response)=>{
     let errorCode:number = 400
     try{ 
        // os objetos necessitam de body por se tratar de um post
        const {nome,cpf,dataNasc}=req.body

       //como nao sei se ususario vai passar corretamente os valores farei uma verificacao
       if(!nome || !cpf || !dataNasc){
          errorCode = 422
          throw new Error ('Please check the fields')
       }
         
       //// aqui seria id:id , name:name no entanto poderia ser escrito nome,cpf,dataNasc => porque sao iguais objetos e propriedades
       const newUser :User = {            
         nome : nome,
         cpf:cpf,
         dataNasc: dataNasc
        
      }
          user.push(newUser)
          
          res.status(200).send({message:"novo ususario criado"})
     }catch(error){
      res.status(errorCode).send(error);
     }
  })

  //6) pegar todos usuarios da lista 
  app.get("/user",(req:Request,res:Response)=>{
   let errorCode = 400 
   //get a busca por query
   try{

     
     const ListaAtualizada=[...user]                       //pegou a lista mas não de forma atualizada
     res.status(200).send(ListaAtualizada)

    }catch(error){
      res.status(errorCode).send({message:error})
    }
  })

  /////////////////////////////////////////////
  //6) pegar lista atualizada assim que você adiciona no Postman
  app.put("/user",(req:Request,res:Response)=>{
   let errorCode = 400 
   //get a busca por query
   try{
     
      const {nome,cpf,dataNasc}=req.body
     
      if(!nome || !cpf || !dataNasc){
         errorCode= 422
         throw new Error ("O campo está incorreto")
      }
      const newUser :User = {            
         nome : nome,
         cpf:cpf,
         dataNasc: dataNasc
        
      }
     const ListaAtualizada=[...user,newUser]
                      
     res.status(200).send(ListaAtualizada)

    }catch(error){
      res.status(errorCode).send({message:error})
    }
  })

  //4)vou deixaer comentado 
//   const userid :User []= [
//    { nome : "ewerton" , cpf: 123456789, dataNasc:23051990,[]},
//    { nome : 'mario' , cpf: 741852963, dataNasc:23051990,[]},
//    { nome : 'luis' , cpf: 963852741, dataNasc:23051990,[]}
//   ]

  //7)

  