import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import getCookie from '../GetCookie/GetCookie'
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
    HorarioDivRight,
    ErroHandler
} from './style'
import api from '../../api/api'


export default function AddContributorForm(props){

    let session
    const {register, handleSubmit, errors} = useForm()
    

    if(document.cookie){
        session = getCookie('userToken')
    }

    const errorHandler = () => {

        if(errors)
            console.log(errors)

    }

    const onSubmit = async (data) => {

        console.log('data')

        try{

            const {
                nome, 
                email, 
                cpf, 
                celular, 
                ocupacao, 
                expedienteEntrada, 
                expedienteSaida,
                almocoEntrada,
                almocoSaida
            } = data


            const response = await api.post('/contributors/register',
            {
                nome, 
                email, 
                cpf, 
                celular, 
                ocupacao, 
                expedienteEntrada, 
                expedienteSaida,
                almocoEntrada,
                almocoSaida
            },
            {
                headers: {
                    Authorization: `Bearer ${session}`
                }
            })


        }catch(e){

            console.log({
                error: e.response.data,
            })

        }

    }

    return(

        <Container>
            <EmptyDiv>

            </EmptyDiv>

            <form id='my-form' onSubmit={handleSubmit(onSubmit)}>
                <FormDiv>
                    <TopDiv>
                        <PictureDiv>
                            <Avatar src="https://www.w3schools.com/howto/img_avatar.png"/>
                        </PictureDiv>
                        <NameDiv>
                            <DefaultInput
                                contributorname
                                name="nome"
                                placeholder="Nome do colaborador" 
                                ref={register({
                                    required: "O nome é obrigatório"
                                })}
                            />
                        </NameDiv>
                    </TopDiv>

                    <DefaultText>Informações</DefaultText>
                    
                    <MiddleDiv>
                        <LeftSide>

                            <DefaultText>CPF</DefaultText>
                            <DefaultInput
                                name="cpf"
                                placeholder="Digite o CPF"
                                ref={register({
                                    required: "O CPF é obrigatório"
                                })}
                            />
                            <DefaultText style={{marginTop: '10px'}}>Telefone</DefaultText>
                            <DefaultInput 
                                name="celular"
                                placeholder="(XX) XXXXX-XXXX"
                                ref={register({
                                    required: "O telefone é obrigatório"
                                })}
                            />

                        </LeftSide>
                        <RightSide>

                            <DefaultText>E-mail</DefaultText>
                            <DefaultInput 
                                name="email"
                                placeholder="Digite o E-mail do colaborador"
                                ref={register({
                                    required: "O email é obrigatório"
                                })}
                            />

                        </RightSide>
                    </MiddleDiv>

                    <OcupacaoDiv>

                        <DefaultText>Ocupação</DefaultText>
                        <DefaultInput 
                            name="ocupacao"
                            placeholder="Ocupação do colaborador?"
                            ref={register}
                        />
                        
                    </OcupacaoDiv>

                    <HorarioDiv>
                        <HorarioDivLeft>

                            <DefaultText>Horário de experiente</DefaultText>
                            <DefaultInput
                                name="expedienteEntrada" 
                                placeholder="Horário de entrada"
                                ref={register}
                            />

                        </HorarioDivLeft>
                        <HorarioDivRight>

                            <DefaultInput 
                                name="expedienteSaida"
                                placeholder="Horário de saída"
                                ref={register}
                            />

                        </HorarioDivRight>
                    </HorarioDiv>

                    <HorarioDiv>
                        <HorarioDivLeft>

                            <DefaultText>Horário de Almoço</DefaultText>
                            <DefaultInput 
                                name="almocoEntrada"
                                placeholder="Horário de entrada"
                                ref={register}
                            />

                        </HorarioDivLeft>
                        <HorarioDivRight>

                            <DefaultInput 
                                name="almocoSaida"
                                placeholder="Horário de saída"
                                ref={register}
                            />

                        </HorarioDivRight>
                    </HorarioDiv>

                    <ErroHandler>
                        {errorHandler}
                    </ErroHandler>

                </FormDiv>
            </form>

        </Container>

    )

}