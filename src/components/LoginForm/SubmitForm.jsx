import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { FaEye } from 'react-icons/fa'
import {
    LoginInput,
    LoginButton,
    ForgotPassword,
    PasswordInputElement,
    PasswordDiv,
    IconStyle,
    ErrorMessage,
    ErrorDiv
} from './style'
import {
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link, 
    Redirect
} from 'react-router-dom'

import api from '../../api/api'

export default function LoginForm(props){

    const [currentType, setCurrentType] = useState('text')

    const {register, handleSubmit, errors} = useForm()

    const handleInputType = () => {
        
        if(currentType === 'text')
            setCurrentType('password')
        else
            setCurrentType('text')

    }

    const onSubmit = async (data) => {

        console.log(data)

        const {email, password} = data

        try{

            console.log(email)


            const response = await api.get('/login', {
                auth: {
                    username: email,
                    password: password
                }
            })

            document.cookie = `userToken=${response.data.sessionToken}`
            {    
            <Redirect to="/"/>
            }

        }catch(e){

            console.log({
                error: e.response.data,
                data: {
                    username: data.email,
                    password: data.password
                }
            })

        }

    }

    return(
        
        <form onSubmit={handleSubmit(onSubmit)}>

            <LoginInput 
                name="email" 
                placeholder="Digite seu e-mail" 
                ref={register({
                    required: "O email é obrigatório"
                })}
            />

            <PasswordDiv>

                <PasswordInputElement 
                    name="password" 
                    type={currentType}
                    placeholder="Digite sua senha"
                    ref={register({ 
                        required: "A senha é obrigatória",
                    })}
                />
                <IconStyle>
                    <FaEye onClick={() => handleInputType()} style={{color: "#E0E0E0",}} />
                </IconStyle>

            </PasswordDiv>

            <ForgotPassword>
                Esqueci minha senha
            </ForgotPassword>
            
            <ErrorDiv>
                {
                    errors.email &&
                    <ErrorMessage>
                        {errors.email.message}
                    </ErrorMessage>
                }   
                {

                    errors.password && !errors.email &&
                    <ErrorMessage>
                        {errors.password.message}
                    </ErrorMessage>
                }   
            </ErrorDiv>

            <LoginButton type="submit">
                Login
            </LoginButton>
            
        </form>

    )

}
