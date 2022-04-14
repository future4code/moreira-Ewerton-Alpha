import express , {Express,Request , Response} from 'express'
import cors from 'cors'

const app:Express = express()

app.use(cors())




//Exercicio 1
app.get("/", (req: Request , res: Response) => {
    console.log("Acessei meu end Point")
    res.status(201).send("Primeiro endpoint criado!")
})

//exercicio 2
type User = {
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string
    
}

//exercicio 3
const users :User[]=[
    {
        id: "aaaa-1111",
        name: "Ewerton",
        phone: 79998311993,
        email: "ewerton.lost@gmail.com",
        website: "ewerton.com.br"
    },
    {
        id: "knro2in3-fin3oi-v3nroi-3rrrfr",
        name: "Casas Bahia",
        phone: 11-382382712,
        email: "casasbahia@casas.com",
        website: "casasbahia.com.br"
    },
    {
        id: "irog33hg-b35h5h4h-b4tht4bt4-b4tb4",
        name: "CVC",
        phone: 11-456643534,
        email: "cvc@cvc.com",
        website: "cvc.com.br"
    },
    {
        id: "fgregrgth-4353htrh-btb4tht4b-b4t4b",
        name: "Americanas",
        phone: 11-3454423343,
        email: "americanas@americanas.com",
        website: "americanas.com.br"
    }
]

//4 exericicio

app.get("/users", (req:Request, res:Response)=>{
    if(!users.length){   
        res.status(401).send("não tem usuário")
    }
    res.status(201).send(users)
}) 

//Colocar no Local host : http://localhost:3003/users

//5 exercicio
 type Post = {
     id: string,
     title: string,
     body : string,
     userId: string
 }

 //  exercicio 6

 
const posts: Post[] = [
    {
        id: "232343-34343-3453-456468",
        title: "Educação que reinventa",
        body: "Venha estudar programação para se tornar um programador de sucesso!",
        userId: "nifdvdf-rvdd4-fbfd4-gbfgbd" 
        },
    {
        id: "45453-232435-232434-2312",
        title: "Vem para Casas Bahia",
        body: "Aqui você encontra os melhores preços com frete gratis",
        userId: "knro2in3-fin3oi-v3nroi-3rrrfr"
    },
    {
        id: "45655-45534534-676767-7787",
        title: "CVC com os melhores preços e hoteis",
        body: "Venha curtir seus melhores momentos ao lado de quem você ama!",
        userId: "irog33hg-b35h5h4h-b4tht4bt4-b4tb4"
    },
    {
        id: "45334-3242343-2322343-54654",
        title: "Americanas",
        body: "Promoções todos os dias e com os melhores preços, venha conferir",
        userId: "fgregrgth-4353htrh-btb4tht4b-b4t4b"
    }
]

//exercicio 7
app.get("/pegalista",(req:Request,res:Response)=>{    //get está para buscas
    if(!posts.length){                  //Length é a propiedade de um objeto que é uma instancia do tipo do array define ou retorna o nnumero de elementos nesse array.
      res.status(401).send("Não tem posts")
    }
    res.status(201).send(posts)
})


//exercicio 8 

app.get("posts/:userId" , (req:Request , res:Response)=>{
   
     let user = req.params.userId             // logica para dizer qual é o parametro
     
     const post = posts.filter((post)=>{
     return post.userId == user                 //é usado para comparação entre duas variáveis, independentemente do tipo de dados da variável
 })
   //se for diferente do que estou esoerando
   if(!user){
     return  res.status(400).send("Entre com id Válido.")  // no caso de ser diferente
      
    }else if(post.length === 0) {  //se o valor for igual de zero ou underfuined acho
      return res.status(400).send("Nenhum resultado encontrado ")
    }
     
     res.status(201).send(post)
})

app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});


//nãp obtive o resultado esperado no postman
