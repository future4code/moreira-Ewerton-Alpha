import React from 'react';
// import './CardGrande.css'
import {Container } from './styled'

function CardGrande(props) {
    return (
        <Container>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </Container>
    )
}

export default CardGrande;