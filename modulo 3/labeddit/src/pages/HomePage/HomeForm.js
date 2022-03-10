import React from 'react'
import { goToFeed,goToRegister } from '../../routes/condinator';
import { useNavigate } from 'react-router-dom';
import {Main} from './styled'
import { Alert, Button, buttonGroupClasses, OutlinedInput, TextField } from '@mui/material';
import useForm from '../../hooks/useForm';
import login from '../../services/user'








const  HomeForm = () => {

   const navigate = useNavigate()
  
  

    const [form,onChange,clear] = useForm({email:"",password:""})


   const onSubimitForm= (event) =>{ 
   event.preventDefault()              //alterar comportamento padrão navegador de salva senha nele
   login(form,clear,navigate)                  //shijo alterou o parametro
 }
  

 
 return (
    <Main>
     <form onSubmit={onSubimitForm}>
     
       <TextField
         name={"email"}
         value={form.email}
         onChange={onChange}
         label={"E-mail"}
         variante={"OutlinedInput"}
         margin={"normal"}
         type={"email"}
        required
        /> 

       <TextField
        name={"password"}
        value={form.password}
        onChange={onChange}
        label={"senha"}
        variante={"OutlinedInput"}
         margin={"normal"}
         type={"password"}
         required
       /> 

        <Button 
        type={"submit"}
        fullWidth             //deixa o botão tamanho input
        variant={"contained"}
        required
        onClick={()=> goToFeed()}
       >
       Enviar
      </Button>
     
      <Button
      type={"submit"}
      fullWidth
      variant={"text"} 
      onClick={()=>goToRegister(navigate)}>Esqueceu sua senha?</Button>
      </form>
      </Main>
     
    
  );
}

export default  HomeForm