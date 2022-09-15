import { config } from "dotenv"
import { authenticationData } from "../types"
import {sign, verify} from "jsonwebtoken"

config()

const {JWT_KEY}= process.env

// gerando token
export const generateToken = (
    payload:authenticationData
):string =>sign(
    payload,JWT_KEY!,
    { expiresIn:"1h"}
)


// validandi Token
export const getTokenData = (
    token:string
): authenticationData | null =>{
  try {

   const { id }= verify(token,JWT_KEY!) as authenticationData

    return { id }
    
  } catch (error) {

    return null
    
  }
}