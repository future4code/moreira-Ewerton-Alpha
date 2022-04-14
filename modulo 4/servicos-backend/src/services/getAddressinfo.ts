import axios from "axios";

//https://viacep.com.br/ws/:cep/json/  

const baseUrl = "https://viacep.com.br/ws/"

export const getAddressInfo = async (zipcode:string)=>{

    try {
        const response = await axios.get('${baseUrl}/${zipcode}/json/')
        console.log(response)
    } catch (error) {
        console.error("Erro no serviço getAddressInfo:",error)
        return null 
    }
    
}