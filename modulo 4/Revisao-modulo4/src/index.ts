import app from "./app"
import  createCharacter  from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"


//Aqui vai ficar todas as rotas nesse arquivo
// as entidades normalmente vai ficar aqui e quase sempre vai ser parecido com o type
app.get("/character",getAllCharacters)
app.put("/character",createCharacter)
app.delete("/character/:id", deleteCharacter)