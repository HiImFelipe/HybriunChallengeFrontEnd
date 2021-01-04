import React, { useState } from 'react'
import {
    EmptyDiv,
    Container,
    DefaultInput,
    TopDiv,
    FormDiv,
    PictureDiv,
    NameDiv,
    Avatar,
    DefaultText,
    MiddleDiv,
    LeftSide,
    RightSide,
    OcupacaoDiv,
    HorarioDiv,
    HorarioDivLeft,
    HorarioDivRight
} from './style'

export default function AddContributorForm(){

    return(

        <Container>
            <EmptyDiv>

            </EmptyDiv>
            <FormDiv>
                <TopDiv>
                    <PictureDiv>
                        <Avatar src="https://www.w3schools.com/howto/img_avatar.png"/>
                    </PictureDiv>
                    <NameDiv>
                        <DefaultInput placeholder="Nome do colaborador" />
                    </NameDiv>
                </TopDiv>

                <DefaultText>Informações</DefaultText>
                
                <MiddleDiv>
                    <LeftSide>

                        <DefaultText>CPF</DefaultText>
                        <DefaultInput placeholder="Digite o CPF"/>
                        <DefaultText style={{marginTop: '10px'}}>Telefone</DefaultText>
                        <DefaultInput placeholder="(XX) XXXXX-XXXX"/>

                    </LeftSide>
                    <RightSide>

                        <DefaultText>E-mail</DefaultText>
                        <DefaultInput placeholder="Digite o E-mail do colaborador"/>

                    </RightSide>
                </MiddleDiv>

                <OcupacaoDiv>

                    <DefaultText>Ocupação</DefaultText>
                    <DefaultInput placeholder="Ocupação do colaborador?"/>
                    
                </OcupacaoDiv>

                <HorarioDiv>
                    <HorarioDivLeft>

                        <DefaultText>Horário de experiente</DefaultText>
                        <DefaultInput placeholder="Horário de entrada"/>

                    </HorarioDivLeft>
                    <HorarioDivRight>

                        <DefaultInput placeholder="Horário de saída"/>

                    </HorarioDivRight>
                </HorarioDiv>

                <HorarioDiv>
                    <HorarioDivLeft>

                        <DefaultText>Horário de Almoço</DefaultText>
                        <DefaultInput placeholder="Horário de entrada"/>

                    </HorarioDivLeft>
                    <HorarioDivRight>

                        <DefaultInput placeholder="Horário de saída"/>

                    </HorarioDivRight>
                </HorarioDiv>

            </FormDiv>
        </Container>

    )

}