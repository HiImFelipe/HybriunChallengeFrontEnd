import React from 'react'
import {
    Container
}from './style'
import Menu from '../../components/Menu/Menu'
import Title from '../../components/Title/Title'
import AddContributorForm from '../../components/AddContributorForm/AddContributorForm'

const AddContributor = () => {

    const title = "Adicionar colaborador"

    return(

        <Container>
            <Menu />
            <Title titleName={title} />

            <AddContributorForm />
        </Container>

    )

}

export default AddContributor 