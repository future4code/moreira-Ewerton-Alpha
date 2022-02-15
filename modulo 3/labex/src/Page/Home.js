import React from 'react';
import { useNavigate } from 'react-router-dom'


// Nome da Constante Letra maiscula
export const  Home = ()=> {
  
  const navigate = useNavigate()

  // O History possui varios metodos
  // push => trocar pagina
  // replace=> trocar pagina impendido que o ussuario volte
  // goBack => trocar de página para ultima página onde o usuário estava
  // Só Funcionou sem o push
  const VerViagens= () => {
    navigate("/ListaDeViagens")
  }

  const irParaPainelAdm =() => {
    navigate("/PainelAdm")
  }
    
  return (
      <div >
        <h1>LabeX</h1>
       
        <button onClick={VerViagens}>Viagens Disponíveis</button>
        
        
        <button onClick={irParaPainelAdm}>Administrativo</button>
      </div>
    );
  }
  

 