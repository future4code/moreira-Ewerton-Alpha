import app from "./app";
import createRecipe from "./endpoints/recipes/createRecipe";
import getRecipeById from "./endpoints/recipes/getRecipeById";
import getProfile from "./endpoints/users/getProfile";
import getUserByid from "./endpoints/users/getUserByid";
import login from "./endpoints/users/login";

import signup from "./endpoints/users/signup";
import { generateToken, getTokenData } from "./services/authenticator";
import { compareHash, generateHash } from "./services/hashManager";
import generateId from "./services/idGenerator";



app.get('/')


                          //testando generateId
// console.log(
//     generateId()
// )
         
 
                            // testando hash
// const cypherText = generateHash("hello World")

// console.log(
//     compareHash("hello World",cypherText)
// )
                            
                        //testando get
// const token = generateToken({id:"abcdefghi"})

// const tokenData = getTokenData(token)

// console.log({
//     token,
//     tokenData


app.post('/users/signup' , signup)
app.post('/users/login', login)
app.get('/users/profile' , getProfile)
app.get('/users/:id/profile', getUserByid)

app.post('/recipe', createRecipe)
app.get('/recipe/:id', getRecipeById)