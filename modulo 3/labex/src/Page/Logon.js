import React from 'react';
import { useNavigate } from 'react-router-dom';




export const  Logon = ()=> {
    
  const navigate = useNavigate()

  const voltarHome = () => {
    navigate('/')
  }
       
  const irParaCadastro = () => {
    navigate('/Logon')
  }
  
  
 return (
      <div >
      <h1>  Faça Aqui seu Login</h1>  
      <button onClick={voltarHome}>Voltar</button>
      <button  onClick={irParaCadastro}>Logon</button>
      </div>
    );
  }