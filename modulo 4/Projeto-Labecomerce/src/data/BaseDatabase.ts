// é uma abstração do banco de dados na vida real

import knex from "knex";
import dotenv from 'dotenv'

dotenv.config()


export class BaseDatabase {
    //se colocar o Portect fica protefido e impeddo de fazer a conexão
     static connection = knex({
        client: 'mysql',
        connection :{
            host:process.env.DB_HOST,
            user:process.env.DB_USER,
            password:process.env.DB_PASSWORD,
            database:process.env.DB_SCHEMA,
            port: 3306,
            multiStatements:true
        }
    })

    closeConnection = () => {
        BaseDatabase.connection.destroy()
    }
}