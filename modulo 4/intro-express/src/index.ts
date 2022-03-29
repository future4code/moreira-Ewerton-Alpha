import express , {Express,Request , Response} from 'express'
import cors from 'cors'

const app:Express = express()

app.use(cors())

app.get("/", (req: Request , res: Response) => {
    console.log("Acessei meu end Point")
    res.status(201).send("Primeiro endpoint criado!")
})

