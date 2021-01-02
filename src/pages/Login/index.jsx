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
    DefaultText,
    LoginInput
} from './style'
import HidePassword from '../../components/PasswordEye'

const MainPage = () => {

    return(

        <Container>
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

                    <LoginInput for="email" placeholder="Digite seu e-mail"/>
                    <LoginInput for="senha" id="myInput" placeholder="Digite a sua senha"/>
                    <HidePassword></HidePassword>

                </LoginPanel>
            </LoginDiv>
        </Container>

    )

}

export default MainPage