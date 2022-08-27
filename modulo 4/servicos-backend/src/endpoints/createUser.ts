import {Request,Response} from "express"
import { getAddressInfo } from "../services/getAddressinfo"
import transporter from "../services/mailtranspoter"



export const createUser = async (req:Request,res:Response)=>{
    try {
       // const {zipcode} = req.body  ou 
       const {zipcode,email,passaword} = req.body

        const address = await getAddressInfo(zipcode)
        if(!address) {
          throw new Error (" Error on get address")
        }

        //quando pegar cep quero enviar o email ex:
// corpo do email normalmente vai ser um html

const emailInfo = await transporter.sendMail({
    from: `${process.env.NODEMAILER_USER}`,
    to: `${email}`,
    subject: "ususario criado com sucesso",
    text: "Seu usuario foi criado com sucesso",
    html: `<p><strong>Ola parabends por se inscrever conosco.</strong>Segue seus dados:
    password: <em>${passaword}</em>
    endereço :${address.city}/${address.state} ${address.district} ${address.street}</p>`
   
})

        res.send({emailInfo , message:"Cadastro concluido com sucesso"})
    } catch (error:any) {
        if(error instanceof Error){
            res.send({error,message:error.message})
        } else {
            res.send({error, message:error.message})
        }
        
        
    }
}