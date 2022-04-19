import express, { Request, Response } from 'express';
import cors from 'cors';
import { movie } from './type';

  
// extra: importando configuracao de rede do node 
import { AddressInfo } from 'net';
//iniciando aplicacao com express Api
const app = express();

//ativandoos módulos de Bodyparser e cors/
app.use(express.json());
app.use(cors());   //para nao tomar bloq na hora do depoloy



// app.listen(3003, () => {
//     console.log("Backend rodando na porta 3003!");
// });

const server = app.listen(process.env.PORT || 3003,()=>{
if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in htpp://localhost: ${address.port}`)
}else {
    console.error(`Failure unpon starting server.`)
}
})

export default app
