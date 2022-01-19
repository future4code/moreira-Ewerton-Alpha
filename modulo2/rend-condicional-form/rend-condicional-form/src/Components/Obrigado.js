import React from "react";

export default class Obrigado extends React.Component {
  state = {
    Fim: "",
  };

  render() {
    return (
      <div>
        <h1>O Formulario Acabou !</h1>

        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </div>
    );
  }
}
