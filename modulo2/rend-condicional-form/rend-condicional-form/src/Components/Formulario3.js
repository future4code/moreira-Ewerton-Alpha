import React from "react";

export default class Formulario3 extends React.Component {
  state = {
    pagina3: "",
  };

  render() {
    return (
      <div>
        <h1>Etapa 3 - Informações do Ensino Superior</h1>
        <div>
          <p>7.Porque você não terminou o Curso de Graduação ?</p>
          <input></input>
        </div>
        <p>8.Você fez algum curso complementar?</p>
        <select>
          <option>"Nenhum"</option>

          <option>"Curdo Técnico"</option>

          <option>"Curso de Inglês"</option>
        </select>
      </div>
    );
  }
}
