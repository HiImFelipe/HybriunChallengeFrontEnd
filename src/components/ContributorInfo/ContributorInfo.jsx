import React from 'react'

export default function ContributorInfo(){

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

        </Container>

    )

}