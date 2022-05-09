import { Request, Response} from "express" 
import { SignupInputDTO } from "../types/signupInputDTO"
import UserBusiness from "../business/UserBusiness"

export default class userController {
    //poderias instanciar e criar o codigo abaixomas melhor constructor
    constructor(
        private userBusiness: UserBusiness
    ){}

    signup = async(req: Request, res: Response)=>{
        const {name,email, password} = req.body;

        const input :SignupInputDTO = { 
            name,
            email,
            password
        }
        try {
            const token = await this.userBusiness.signup(input)
            res.status(201).send({message:"usuário cadastrado com sucesso", token})
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup") 
        }
        
        }
}