import React from 'react'
import Menu from '../../components/Menu/Menu'
import Title from '../../components/Title/Title'
import {
    Container,
    TitleContainer,
    TitleLeftSide,
    TitleRightSide,
    LeftSideButtonDiv,
    RightSideButtonDiv,
    DefaultButton
} from './style'

export default function Contributor(props){

    return(

        <Container>

            <Menu />

            <TitleContainer>

                <TitleLeftSide>
                    <Title titleName="Detalhes do contribuidor" />
                </TitleLeftSide>

                <TitleRightSide>
                    <LeftSideButtonDiv>
                        <DefaultButton >
                            Cancelar
                        </DefaultButton>
                    </LeftSideButtonDiv>
                            
                    <RightSideButtonDiv>
                        <DefaultButton blue form='my-form' type="submit">
                            Salvar
                        </DefaultButton>
                    </RightSideButtonDiv>
                </TitleRightSide>

            </TitleContainer>

        </Container>

    )

}