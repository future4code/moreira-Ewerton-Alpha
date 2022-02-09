import React , {useState}from 'react'
import { TelaIncial } from './pages/telainicialPages/TelaInicial';
import { TelaMatches } from './pages/telaMatchesPages/TelaMatches';







  export default  function App() {
  const [home,setHome] = useState('home')

    
  
  const  selectPage = () => {
    
    switch (home){
      case "Astromatch" :
        return <TelaIncial />
        case "matches":
        return  <TelaMatches />
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



  

  








