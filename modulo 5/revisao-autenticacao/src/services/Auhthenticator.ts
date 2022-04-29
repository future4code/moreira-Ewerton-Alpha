import * as jwt from "jsonwebtoken";
import { User_Roles } from "../entities/User";

export interface AuthenticationData {
    id:string, 
    role:User_Roles,
}

export class Authenticator {
    //TER QUE COLOCAR NO DOTE eNV
    public generate (input:AuthenticationData): string {
        const token = jwt.sign(input,process.env.JWT_KEY,{
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
        })
        return token;
    }

    public getTokenData(token: string):AuthenticationData {
        const data  = jwt.verify(token,process.env.jwt_key)
        return data as AuthenticationData
    }
}    
  
