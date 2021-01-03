import styled from 'styled-components'

export const LoginInput = styled.input`
    border-style: none none solid none;
    border-color: #E0E0E0;
    margin-top: 70px;
    font-size: 24px;
    height: 60px;
    width: 100%;
    padding: .8rem 1rem;
`

export const LoginButton = styled.button`
    margin-top: 30px;
    background-color: #0066F0;
    color: white;
    font-size: 24px;
    height: 70px;
    width: 100%;
    border: none;
    border-radius: 3px;
`

export const ForgotPassword = styled.h3`
    margin-top: 35px;
    text-align: right;
    color: #0066F0;
    font-weight: lighter;
    font-size: 1.5em;
`

export const PasswordInputElement = styled.input`
    padding: .8rem 1rem;
    border-style: none none solid none;
    border-color: #E0E0E0;
    font-size: 24px;
    width: 100%;
`

export const PasswordDiv = styled.div`
    display: inline-block;
    position: relative;
    margin-top: 70px;
    height: 40px;
    width: 100%;
` 

// This div is absolutely arbitrary and only works for the icon to get it's properties

export const IconStyle = styled.div`
    padding: .4rem .6rem;
    display: block;
    position: absolute;
    right: 5px;
    top: 5px;
` 
export const ErrorDiv = styled.div`
    display: inline-block;
    position: relative;
    margin-top: 40px;
    height: 20px;
    width: 100%;
` 


export const ErrorMessage = styled.h1`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    color: red;
    font-weight: lighter;
    font-size: 25px;
` 