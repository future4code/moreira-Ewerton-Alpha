import { connection } from "./BaseDataBase"
import dotenv from "dotenv"

dotenv.config()

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

      CREATE TABLE IF NOT EXISTS doghero (
         id VARCHAR(255) PRIMARY KEY,
         status Enum("A fazer" ,"andamento","feito") default " a fazer ",
         date_schedule DATE NOT NULL,
         PRICE FLOAT NOT NULL ,
         latitude VARCHAR(255) NOT NULL,
         longitute VARCHAR(255) NOT NULL,
         duration ENUM ("30", "60")NOT NULL, 
         date_inicio timestamp NOT NULL,
         date_termino timestamp NOT NULL CURRENT_TIMESTAMP

      );

      CREATE TABLE IF NOT EXISTS pets(
         id VARCHAR(255) PRIMARY KEY,
         name_pets VARCHAR(255) NOT NULL,
         doghero_id varchar(255) NOT NULL
         FOREIGN KEY(user_id) REFERENCES doghero(id) 
      );

`)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertUsers = () => connection("aula49_users")
   .insert(users)
   .then(() => { console.log("Usuários criados") })
   .catch(printError)

const insertRecipes = () => connection("aula49_recipes")
   .insert(recipes)
   .then(() => { console.log("Receitas criadas") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .then(insertRecipes)
   .finally(closeConnection)

function users(users: any) {
    throw new Error("Function not implemented.")
}
function recipes(recipes: any) {
    throw new Error("Function not implemented.")
}

