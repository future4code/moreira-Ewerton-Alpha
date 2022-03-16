import React from 'react';
import styled from "styled-components"
import {Bigcard} from './styled'

function CardGrande(props) {
    return (
        <Bigcard>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </Bigcard>
    )
}

export default CardGrande;