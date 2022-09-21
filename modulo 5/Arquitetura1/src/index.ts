import { connection } from './data/baseDataBase'


app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})


