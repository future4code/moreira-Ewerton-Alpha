
import Chat from "./componentes/Chat";
// import ContainerInput from "./componentes/ContainerInput"
import "./style.css";
import styled from 'styled-components'
import Whatslab from './componentes/Whatslab'

//tentei fazer importar um arquivo unico css e não consegui o style.css//
//terntei trocar a div classe name CONTAINERIPUNTE e Containerinpu2 por componentes//
//Não consegui fazer importação do Componente , para substituir o bloco pelo componente
//
const Container =styled.div`
background-image:

`
function App() {
 
 
  return (
    <div>
      
       {/* <Chat nome={`Chat`}/> */}
       {/* <Chat/>
        */}
      
     <Whatslab/>
    
     </div>
  );
}

export default App;
