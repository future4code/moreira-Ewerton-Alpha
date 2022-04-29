import { BaseDatabase } from './BaseDatabase';
import { User } from '../entities/User'

export class UserDatabase extends BaseDatabase {
    
    public async createUser(user:User){
         try {
             await BaseDatabase.connection("lbn_user").insert({
                //lemnbrando só ultilizo o gets porque precisava de info que era privada do banco de Dados
                id: user.getId(),
                name: user.getName(),
                email:user.getEmail(),
                password:user.getPassword(),
                Role: user.getRole()
             })
             
         } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
         }
    }
    
    
    
    public async findUserByEmail(email:string):Promise<User> {
        try {
            const user = await BaseDatabase.connection('lbn_user')
            .select('*')
            .where({email:email})

            return user[0] && User.toUserModel(user[0])
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}