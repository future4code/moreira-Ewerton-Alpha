
import Chat from "./componentes/Chat";
import ContainerInput from "./componentes/ContainerInput"
import "./style.css";

//tentei fazer importar um arquivo unico css e não consegui o style.css//
//terntei trocar a div classe name CONTAINERIPUNTE e Containerinpu2 por componentes//
//Não consegui fazer importação do Componente , para substituir o bloco pelo componente
//

function App() {
 
 
  return (
    <div className="App">
      <h1 className="title">ProjetoWhatslab</h1>
       <Chat nome={`Chat`}/>
       
      

    
    </div>
  );
}

export default App;
