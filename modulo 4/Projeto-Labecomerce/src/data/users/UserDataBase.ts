
import { User } from "../../entities/User";
import { BaseDatabase } from "../BaseDatabase";

//essa clase vai herdar todas caractristicas da classe pai emanipular os dados banco dados
//aqui é onde vai ficar todas as funções metodos que manipulam os dados do banco de Dados
export class UserDataBase extends BaseDatabase{

    //criaremos uma variavel para caso precisemos alterar o nome apenas alteraremos o nome da variavel
    private static tableName = "labecommerce_users"

    //agora vamos tratar os resultados vindos bancos de dados que vem do DataBase

    private toUser = (input:User) => new User (
        input.id,
        input.name,
        input.email,
        input.password,
       
    )
    
    createUser = (user:User)=>BaseDatabase
                                    .connection(UserDataBase.tableName)
                                    .insert(user)

    getUserByEmail = async (email: string) => {
        const [result] = await BaseDatabase
          .connection(UserDataBase.tableName)
          .where({ email })

        if( result) return this.toUser(result)
    } 
    
    getAllUser = async () => {
        const result = await BaseDatabase
                                       .connection(UserDataBase.tableName)
            return result.map(this.toUser)
            
    }


}