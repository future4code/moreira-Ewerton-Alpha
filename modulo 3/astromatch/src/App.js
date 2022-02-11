import React , {useState}from 'react'
import { TelaIncial } from './pages/telainicialPages/TelaInicial';
import { TelaMatches } from './pages/telaMatchesPages/TelaMatches';







  export default  function App(props) {
  const [home,setHome] = useState('Astromatch')

  const listaMatches = () => {
      setHome("seusmatches")  
  }

  const voltar = () => {
    setHome("Astromatch")
  }
  
  const  selectPage = (props) => {
    
    switch (home){
      case "Astromatch" :
        return <TelaIncial listaMatches={listaMatches}/>
        case "seusmatches":
        return  <TelaMatches voltar={voltar} />
        default:
        return <TelaIncial />
      }

    }
     

  
    return (
      <div>
       {selectPage()}
      
      </div>
  
    );
  
   
  
  }



  

  








