import React from 'react'
import { goToHome } from '../../routes/condinator';
import { useNavigate } from 'react-router-dom';
import {Main} from './styled'
import { Button, buttonGroupClasses, OutlinedInput, TextField } from '@mui/material';
import useForm from '../../hooks/useForm';

// import axios from 'axios';
// import { BASE_URL }from '../../constantes/urls'


const  RegisterForm = () => {

  //    const navigate = useNavigate()
  
  

  const [form,onChange,clear] = useForm({username :"",email:"",password:""})


  const onSubimitForm= (event) =>{  //alterar comportamento padrão navegador de salva senha nele
    event.preventDefault()
    console.log(form)
  }


  return (
    <div>
      
    
     <Main>
     <form onSubmit={onSubimitForm}>
        <TextField
         name={"username"}
         value={form.username}
         onChange={onChange}
         label={"nome"}
         variante={"OutlinedInput"}
         margin={"normal"}
         type={"name"}
        required
        /> 
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
        onClick={()=> goToHome()}  //inserir alert
       >
       Enviar
      </Button>
     
     
      </form>
      </Main>
     
    
    </div> 
  );
}

export default  RegisterForm