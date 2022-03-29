import express from 'express';
import cors from 'cors';
import { afazeres } from './todolist';


// 2) INICIALIZAÇÃO DO EXPRESS
const app = express()

// 3) CONFIGURAÇÃO DOS MIDDLEWARES
app.use(express.json()) // obriga a saída do backend a ser tipo JSON (objeto)
// {
//     "prop1": "valor",
//      "prop2": [informações]
// }
app.use(cors())


// 5) CONFIGURAÇÃO DE "ESCUTA" DA PORTA DE ACESSO
// app.listen(portaLogica, funçãoDeConfirmaçãoDaPorta);

// portaLógica -> ponto acesso para transferência de dados
// porta -> 1000,3000,8080
// Para desenvolvimento -> 3000,3001,3002,3003,...
// react -> npm run start -> http://localhost:3000/caminhos
// backend -> npm run start -> http://localhost:3003/rotas

app.listen(3003, () => {
    console.log("O backend está rodando na porta 3003! :)");
})

// deploy -> levar o código pra web/rede

/////////////////////////////////////

//questao 1)

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

//questao 2) 
app.get("/lista",(req, res) =>{
    res.send(afazeres)
})

//questão 3)

app.get("/concluidos", (req, res) => {
    const concluido = afazeres.filter((afazer) => {
        return afazer.completed === true
    })
     res.send(concluido)
})

// questao 5 
app.post("/criados", (req, res) => {
    const novasTarefas = {
        userId: Date.now().toString(),
        id: Date.now().toString(),
        title: req.body.title,
        completed: req.body.completed
    }
    console.log(req.body)
    const newToDo = [...afazeres, novasTarefas]

    res.status(200).send({newToDo})

    })

    //6) 


    //7)
    app.delete("/list/:id", (req, res) => {
        const id = Number(req.params.id)
    
        const listUpdate =afazeres.filter((task) => {
            return task.id !== id
        })
        res.status(220).send(listUpdate)
    })

