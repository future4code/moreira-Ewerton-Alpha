import { Request,Response } from 'express';
import createUser, * as userBusiness from '../business/userBusiness'



    export default async function signup(req:Request,res:Response) {

        
        try {
            const input = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
				role: req.body.role
            }

            const token = await createUser(input);

            res.status(200).send({ token });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

        //await destroyConnection();
    }

