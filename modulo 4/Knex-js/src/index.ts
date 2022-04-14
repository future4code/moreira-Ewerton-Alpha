 // no index.ts:

import express, { Express,Request , Response } from "express";
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


//1)


// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}


// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

// Assim a chamada funciona fora dos endpoints com await
(async () => {
  console.log(await getActorById("001") )
})()


// Ou então podemos chamá-la dentro de um endpoint
// app.get("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id

//     console.log(await getActorById(id))

//     res.end()
//   } catch (error) {
// 		// console.log(error.message)
//     res.status(500).send("Unexpected error")
//   }
// }) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal


//b)
app.get("/users/:name", async (req: Request, res: Response) => {
  try {
    const getActorByname = async (id: string): Promise<any> => {
      const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${name}'
      `)
    
      return result[0][0]
    }
    const name = req.params.name

    console.log(await getActorByname(name))

    res.end(name)
  } catch (error) { 
		// console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})






