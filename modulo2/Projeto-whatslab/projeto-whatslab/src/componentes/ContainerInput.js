import React from "react"
import { AiOutlineSend } from "react-icons/ai";
// // import { CgProfile } from "react-icons/cg";

class ContainerInput extends React.Component {
  render() {
    return (
      <div className="containerInput">
        <button className="profile">
          <h2>{this.props.nome}</h2>

          
          {/* <CgProfile size={25} color="#000" /> */}
        </button>
        <button>
         
          <AiOutlineSend size={25} color="#000" />
         
        </button>
      </div>
    );
  }
}

export default ContainerInput