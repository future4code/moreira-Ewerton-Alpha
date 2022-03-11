import axios from 'axios';
import { BASE_URL }from '../constantes/urls'
import { Alert, Button, buttonGroupClasses, OutlinedInput, TextField } from '@mui/material';
import { goToFeed } from '../routes/condinator';
import { useNavigate}from 'react-router-dom'

export const headers ={
   headers:{
    'Content-Type': 'application/json'
   } 
} 

 export const login = (body,clear,headers,navigate)=> {               //chijo alterou parametro form para body//
 axios.post(`${BASE_URL}/users/login`,body,headers)
 .then((res)=>{
    localStorage.setItem("token",res.data.token)
    clear()
    console.log(navigate)
    goToFeed(navigate)
    
    
})
  
 .catch((err)=>{
    alert("Errado no Login")
    console.log(err)
 })
 

 
}   

export default login
