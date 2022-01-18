import React from "react";

export default class Formulario2 extends React.Component {
  state = {
    pagina2: "",
  };

  render() {
    return (
      <div>
        <h1>Etapa 2 - Informações do Ensino Superior</h1>
        <div>
          <p>5.Qual Curso ?</p>
          <input></input>
        </div>
        <p>6.Qual sua Unidade de Ensino? </p>
        <input></input>
      </div>
    );
  }
}
