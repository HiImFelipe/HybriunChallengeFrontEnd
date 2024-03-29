import React, { useState } from 'react'
import {
    Container,
    TitleContainer,
    TitleLeftSide,
    TitleRightSide,
    LeftSideButtonDiv,
    RightSideButtonDiv,
    DefaultButton,
    MainDiv
}from './style'
import Menu from '../../components/Menu/Menu'
import Title from '../../components/Title/Title'
import AddContributorForm from '../../components/AddContributorForm/AddContributorForm'

const AddContributor = () => {
    
    const [callSubmit, setCallSubmit] = useState(false)
    const title = "Adicionar colaborador"

    const handleCallSubmit = () => {

        console.log('salveTM')
        setCallSubmit(true)

    }

    return(

        <Container>
            
            <Menu />
            <TitleContainer>

                <TitleLeftSide>
                    <Title titleName={title} />
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

            <MainDiv>
                <div> {/* Necessary as the AddContributorForm component takes 100% of the width */}
                    <AddContributorForm />
                </div>
                
            </MainDiv>

        </Container>

    )

}

export default AddContributor 