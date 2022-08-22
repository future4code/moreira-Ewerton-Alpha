import axios from "axios"
import { baseURL } from "./baseURL"

//2) da forma do then

// const getAllSubscribers = () =>{
// return axios
// .get(`${baseURL}/subscribers`)
// .then(res => res.data)
// .catch(err => err.resp)
// }
// gabarito exercicio 

// mesma funcao com arrow function
const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };
