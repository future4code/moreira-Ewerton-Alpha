import {Request,Response} from "express"
import { getAddressInfo } from "../services/getAddressinfo"



export const createUser = async (req:Request,res:Response)=>{
    try {
        const {zipcode} = req.body
        const address = await(getAddressInfo(zipcode))
        res.send("teste executado")
    } catch (error) {
        res.send({message: "error inesperado"})
    }
}