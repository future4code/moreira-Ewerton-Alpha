import React from 'react';
import './styled.js'
import { Bloco } from './styled.js';
// import {Icone1} from '../../assents/Imagem/'
// import {Icone2} from '../../assents/Imagem/'

// importaççao da Imagem


function CardPequeno(props) {
    return (
        <div>
            {/* <img src={ props.imagem } /> */}
                
                
                <Bloco>
                <h4>{ props.email }</h4>
                {/* <img src={Icone1}> </img> */}
                </Bloco>
                
                
                <Bloco>
                {/* <img src={Icone2}> </img> */}
                <p>{ props.endereco }</p>
                </Bloco>
        </div>
    )
}

export default CardPequeno;