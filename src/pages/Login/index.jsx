import React from 'react'
import {
    Container,
    LoginDiv,
    LoginPanel,
    WelcomeTextDiv,
    MainTitle,
    SubTitle,
    MainTextDiv,
    BottomTextDiv,
    DefaultText
} from './style'
import LoginForm from '../../components/LoginForm/SubmitForm'
import { IconContext } from 'react-icons'

const MainPage = () => {

    return(

        <Container>

            <IconContext.Provider value={{ size: 40 }}>

                <LoginDiv>
                    <WelcomeTextDiv>
                        <MainTextDiv>

                            <MainTitle> 
                                Seja bem-vindo 
                            </MainTitle>
                            <SubTitle>
                                Para continuar<br/>
                                por favor faça login
                            </SubTitle>

                        </MainTextDiv>
                        <BottomTextDiv>

                            <DefaultText logo>
                                Logotipo
                            </DefaultText>

                        </BottomTextDiv>
                    </WelcomeTextDiv>
                    <LoginPanel>

                        <DefaultText>
                            Utilize o painel agora<br/>
                            mesmo
                        </DefaultText>

                        <LoginForm />

                    </LoginPanel>
                </LoginDiv>

            </IconContext.Provider>


        </Container>

    )

}

export default MainPage