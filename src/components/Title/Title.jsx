import React from 'react'
import {
    Container,
    TitleDiv,
    TitleText,
    EmptyDiv
} from './style'

export default function Title(props){

    return(
        <Container>
            <EmptyDiv>

            </EmptyDiv>
            <TitleDiv>
                <TitleText>{props.titleName}</TitleText>
            </TitleDiv>
        </Container>

    )

}