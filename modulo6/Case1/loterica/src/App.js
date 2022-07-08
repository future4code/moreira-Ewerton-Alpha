// import styledComponents from "styled-components";
import Concursos from "./components/concursos/Concursos";
import Loterias from "./components/Lista/Loterias";


// const Container = styled.div`

// `
// const Formulario = styled.form`

// `

function App() {
  return (
    <div>
     <h1>Sorteio Mega Senna</h1>

    <form>
       <label htmlFor="Sorteio">Sorteio</label>
         <Loterias/>
      </form>

      <p>Numeros da sorte <Concursos/></p>
      
    </div>
  );
}

export default App;
