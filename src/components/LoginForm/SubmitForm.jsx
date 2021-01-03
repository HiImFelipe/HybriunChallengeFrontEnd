import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import {
    LoginInput,
    LoginButton,
    ForgotPassword,
    PasswordInputElement,
    PasswordDiv,
    IconStyle
} from './style'
import { FaEye } from 'react-icons/fa'

export default function LoginForm(props){

    const [currentType, setCurrentType] = useState()

    const {register, handleSubmit, errors} = useForm()

    const handleInputType = () => {
        
        if(currentType === 'text'){

            setCurrentType({
                currentType: 'password'
            })

        }else{

            setCurrentType({
                currentType: 'text'
            })

        }

    }

    const onSubmit = (data) => {

        console.log(data)

    }

    return(
        
        <form onSubmit={handleSubmit(onSubmit)}>

            <LoginInput 
                name="email" 
                placeholder="Digite seu e-mail" 
                ref={register}
            />

            <PasswordDiv>

                <PasswordInputElement 
                    name="password" 
                    type={currentType}
                    placeholder="Digite sua senha"
                    ref={register({ 
                        required: true
                    })}
                />
                <IconStyle>
                    <FaEye onClick={() => handleInputType()} />
                </IconStyle>

            </PasswordDiv>

            <ForgotPassword>
                Esqueci minha senha
            </ForgotPassword>

            <LoginButton type="submit">
                Login
            </LoginButton>
            
        </form>

    )

}

