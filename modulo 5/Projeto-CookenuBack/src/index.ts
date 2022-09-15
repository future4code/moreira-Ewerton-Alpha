import app from "./app";
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
const token = generateToken({id:"abcdefghi"})

const tokenData = getTokenData(token)

console.log({
    token,
    tokenData
});