import { Request, Response} from "express";
import connection from "../../connection";
import { getTokenData } from "../../services/authenticator";
import { recipeTableName } from "../../types";

export default async function getRecipeById(
    req:Request,
    res:Response
):Promise<void>{
    try {
        const token = req.headers.authorization;

    const { title, description } = req.body;

    const tokenData = getTokenData(token!);

    //validações:
    if(!tokenData){
      res.statusCode = 401
      throw new Error ("Confira se o token esta valido - Unauthorized")
    }

        const [recipe] = await connection(recipeTableName)
        .where({id: req.params.id})
        
        //validacao relevante
        if(!recipe){
            res.statusCode = 404
            throw new Error("Recipe not found")

        }

        // res.send({recipe}) ou
        res.send({
            id:recipe.id,
            title: recipe.title,
            description: recipe.description,
            createdAt: recipe.created_at
        })
        
    } catch (error:any) {
        console.log(error.message)
    
        if(res.statusCode === 200){
            res.status(500).send("Internal server Error")
        } else {
            res.send(error.message)
        }
        
    }
}