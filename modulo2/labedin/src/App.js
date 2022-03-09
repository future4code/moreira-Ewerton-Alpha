import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQGUvvI7R-j6BA/profile-displayphoto-shrink_100_100/0/1582039986288?e=1652313600&v=beta&t=Xmi1fliTlvdjoZ3En1unUfAOOcDSH-hfhmfweaMCbsI" 
          nome="Ewerton Francis" 
          descricao="Futuro Desennvolvedor Full Stack"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div>
      <CardPequeno
          imagem="https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Femail-abrir-%25C3%25ADcone-novo-bonito-meticulosamente-projetado-aberto-e-mail-vetor-bem-organizado-totalmente-edit%25C3%25A1vel-158557376.jpg&imgrefurl=https%3A%2F%2Fpt.dreamstime.com%2Femail-abrir-%25C3%25ADcone-novo-bonito-meticulosamente-projetado-aberto-e-mail-vetor-bem-organizado-totalmente-edit%25C3%25A1vel-image158557376&tbnid=RTt_1dXgSz6lMM&vet=12ahUKEwidsvK-trf2AhW9MrkGHSR9Cs0QMygDegUIARDbAQ..i&docid=7n7dANc1nb149M&w=800&h=800&q=email&ved=2ahUKEwidsvK-trf2AhW9MrkGHSR9Cs0QMygDegUIARDbAQ" 
          email= "email:ewerton.lost2@gmail.com" 
          endereco= "endereço: Aracaju-se Brazil"
        />
        </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
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
