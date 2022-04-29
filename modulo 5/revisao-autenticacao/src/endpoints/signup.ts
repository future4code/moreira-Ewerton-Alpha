import { UserDatabase } from './../data/UserDatabase';
import { Request, Response} from "express"
import { IdGenerator } from "../services/idGeneretor";
import { HashManager } from '../services/HashManager';
import { User } from '../entities/User';
import { Authenticator } from '../services/Auhthenticator';


export async function signup(req:Request, res:Response){
    try {
        const { name, email,password, role} = req.body;

        if (!name || !email || !password || !role) {
            res.status(422)
            .send(
                "Insira Corretamente as Informações de 'name' , 'email','password','role'"
            );
        }

        const userDatabase = new UserDatabase();
        const user = await userDatabase.findUserByEmail(email);
        //coloquei um await diferente do video que ela não colocou
        if(await user){
        res.status(409).send("Esse email ja está cadastrado")
        }
        const idGenerator = new IdGenerator();
        const id = IdGenerator.generate();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(password);
        
        const newUser = new User(id,name,email,hashPassword,role);
        await userDatabase.createUser(newUser)

        const authenticator = new Authenticator()
        const token= authenticator.generate({id,role})

        res.status(200).send({ message: "Usuario criado com sucesso" , token})
       
    } catch (error: any) {
        res.status(400).send(error.message)
    }
    

}