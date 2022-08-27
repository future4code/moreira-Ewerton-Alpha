import axios from "axios";
import { Address } from "../types/Adress";

//https://viacep.com.br/ws/:cep/json/  

const baseUrl = "https://viacep.com.br/ws/"

export const getAddressInfo = async (zipcode:string) : Promise <Address | null >=>{

    try {
        const response = await axios.get(`${baseUrl}/${zipcode}/json/`)
        //console.log(response)
        const address: Address = {
            state: response.data.uf,
            city: response.data.localidade,
            district:response.data.district,
            street: response.data.logradouro
        }

        return address
    } catch (error) {
        //importante deixar claro esse error
        console.error("Erro no serviço getAddressInfo:",error)
        return null 
    }
    
}