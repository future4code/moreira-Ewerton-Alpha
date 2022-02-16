import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoHome from "../Imagens/LogoHome.png";

const MainSection = styled.section`
  div {
    margin-top:200px;
    height: 90vh;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    div.containerButtons{

      display: flex;
      flex-direction: row;
      column-gap: 10px;
      margin-top:10px;
    }
  }
`;
const Logo = styled.img``;

// Nome da Constante Letra maiscula
export const Home = () => {
  const navigate = useNavigate();

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
        <Logo src={LogoHome} />
        <h1> Venha explorar o infinito </h1>
        <div className="containerButtons">
          <button onClick={VerViagens}>Viagens Disponíveis</button>
          <button onClick={irParaLogon}>Login</button>
        </div>
      </div>
    </MainSection>
  );
};
