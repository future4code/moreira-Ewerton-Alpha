import React from 'react';
import { useNavigate } from 'react-router-dom';


export const  Administrativo = ()=> {
    
    const navigate = useNavigate()
  
    const voltarHome = () => {
      navigate('/')
    }
         
    const irParaLogon = () => {
      navigate('/Logon')
    }
    
    
   return (
        <div >
        <h1>  Faça Aqui seu Login</h1>  
        <button onClick={voltarHome}>Voltar</button>
        <button  onClick={irParaLogon}>Logon</button>
        </div>
      );
    }