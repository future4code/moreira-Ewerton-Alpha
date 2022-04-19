import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
}); 



///////////////////////////////////////////////////////////////

// no index.ts:



//   1-a- Para executar acoes que são executadas ao criar uma instancia de classe  
//          tem como caracteristica :
//          Sempre o construtor deve ser declarado com a função     
//          sempre possui em uma classe o construtor ainda que seja vazio,
//          pode receber parametros que podem ser passados no momento de criar instancia

//b- uma vez aparece se houver chamamento da função e nenhuma se não houver chamamento


//c-Para ter acesso a uma chave privada é necessário criar um metodo(funcao) CHAVE Pública  da classe que referencia o construtor
//depois atribuir uma variavel para chamar a classe , ou seja o instaciameto

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions:Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
       
      public getCpf(): string {
        return this.cpf
    }

      public getName(): string {
       return  this.name
    }
    
      public getAge(): number {
      return this.age
    }
  
  }
     
//   const novosuario = new UserAccount("45645131","jason",20) 

  



//2
//a-

// type Transaction {
//     description: string,
//     value: number,
//     date: string
//   }

  
class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  
    //criat metodos

    public getDate(): string{
        return this.date;
    }

    public getValue():number{
        return this.value
    }

    public getDescription():string{
        return this.description
    }
}







 
 class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
     public get() : UserAccount[]{
         return this.accounts
     }

  }

  
  const novosuario = new UserAccount("45645131","jason",20) 
 
  // fiqeui com Duvida em como fazer para inserir a variavel trasaction em useraconut
  const transacao = new Transaction ("21-12-2021",12,"baixinho")
  
  
  const contas = new Bank([])

  

  