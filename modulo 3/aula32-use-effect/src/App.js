import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCards.js";

export default function App () {
const [pokeList,setPokelist] = useState([])
const [pokeName,setPokename] = useState("")




const changePokeName = event => {
  setPokename({ pokeName: event.target.value });
};



  // método que roda após a montagem do componente
  const  getNamed = (name) => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then(response => {
        // função que está setando no estado os 151 pokemons
       setPokelist({ pokeList: response.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect((name)=>{ 
    getNamed(name)
  },)

 

    
  return (
      <div>
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokeList.map(pokemon => {
            return (
              <option>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    )
}  



