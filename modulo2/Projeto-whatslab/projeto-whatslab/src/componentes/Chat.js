import React from "react"
import { AiOutlineSend } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import ContainerInput from "./ContainerInput";

class Chat extends React.Component {
  render() {
    return (
      <div className="containerInput">
        
          <h2>{this.props.nome}</h2>
          <div> 
              <p>olá</p>
          </div>
          <ContainerInput nome={`Consumidor`}/>
         
      </div>
    );
  }
}

export default Chat