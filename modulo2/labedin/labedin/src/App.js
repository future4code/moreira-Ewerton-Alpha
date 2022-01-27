import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './imagens/ewertonlinkedin.jpg';
import LabenuCurso from './imagens/labenulogo.png';
import Trabalhos from './imagens/paguemenos.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil}
          nome="Ewerton Francis Santos" 
          descricao="Sou formado em gestão financeira , entusiasta de tudo a relacionado a tecnologia atualmente estudadnte da labenu full"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      

        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={LabenuCurso}
          nome="Labenu" 
          descricao="Futuro Desenvolvedor Full stack!" 
        />
        
        <CardGrande 
          imagem={Trabalhos} 
          nome="Experiencia Profissional" 
          descricao="Atendente Call Center" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
