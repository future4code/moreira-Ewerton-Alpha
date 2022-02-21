import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoHome from "../Imagens/LogoHome.png";

const MainSection = styled.section`
  div {
    margin-top:100px; 
    height: 90vh;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    font-size:60px;
    color:white;
    
  div.buttons{
      flex-direction: row;
      column-gap: 30px;
      margin-top:500px;
    } 
  }
`;
// const LogoHome = styled.img`

// `;

// Nome da Constante Letra maiscula
export const Home = () => {
  const navigate = useNavigate();
  // versão anterior 5.0
  // O History possui varios metodos
  // push => trocar pagina
  // replace=> trocar pagina impendido que o ussuario volte
  // goBack => trocar de página para ultima página onde o usuário estava
  // Só Funcionou sem o push
  const VerViagens = () => {
    navigate("/ListaDeViagens");
  };

  const irParaLogon = () => {
    navigate("/Logon");
  };

  return (
    <MainSection>
      
      <div >
        <img src={LogoHome} />
        <slogan> Explore o Infinito </slogan>
        <div className="containerButtons">
          <button onClick={VerViagens}>Viagens Disponíveis</button>
          <button onClick={()=>irParaLogon()}>Login</button>
        </div>
      </div>
    </MainSection>
  );
};
