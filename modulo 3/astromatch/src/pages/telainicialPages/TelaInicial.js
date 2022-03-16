import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { GiHeartStake } from "react-icons/gi";
import { GiBrokenHeart } from "react-icons/gi";
import Logo from "../../img/logotipo.png";


const Container = styled.div`
background-color:
#fc9cb4;
width:400px;
height:600px; 
position:fixed;
top:10%;
left:10%;
transforms:translate(-50%,-50%);
border-radius:15px;
border-color:Black;


`;



const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;



const Img = styled.img`
  border-radius: 30px;
`;
const Logomarca = styled.img`
  width: 50%;
`;

const Perfil = styled.div`
`

export const Botao = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  color: transparent;
  transition: 0.2s ease;
  align-self: center;
  font-size: 0.8em;
  margin-left: 0.2em;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.5s;
  :hover {
    background-color: transparent;
    color: transparent;
    transform: scale(1.2);
  }
  :active {
    background-color: transparent;
  }
`;

export function TelaIncial(props) {
  const [perfil, setPerfil] = useState([]);

  const [match, setMatch] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:ewerton/person"
      )
      .then((res) => {
        setPerfil(res.data.profile);
        console.log(res.data.profile);
      })
      .catch((err) => console.log(err.response));
  };
  const ChoosePerson = () => {
    const body = { id: perfil.id, choice: true };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:ewerton/choose-person",
        body
      )
      .then((res) => {
        alert("Você deu Match");
        setMatch(res.data);
        getProfile();
      })
      .catch((err) => console.log(err.response));
  };

  return (
      <Container>
        <Titulo>
          <Logomarca src={Logo} />
          <Botao className="Pares" onClick={props.listaMatches}>
            <GiHeartStake size="6em" color="#ff6994" />
          </Botao>
        </Titulo>
        <hr></hr>
        <Perfil>
        <Img src={perfil.photo} alt={perfil.name}></Img>
        <p1>{perfil.age}</p1>
        <p2>{perfil.name}</p2>
        <p3>{perfil.bio}</p3>
        </Perfil>

        <button onClick={() => getProfile()}>
        <GiBrokenHeart size="6em" color="#ff6994"/>
        </button>
        <button onClick={() => ChoosePerson()}>
        <FcLike size="6em" color="#ff6994" />
        </button>
      
      </Container>
  );
}
