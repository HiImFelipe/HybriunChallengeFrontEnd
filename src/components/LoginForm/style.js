import styled from 'styled-components'

export const LoginInput = styled.input`
    border-style: none none solid none;
    margin-top: 70px;
    font-size: 24px;
    height: 60px;
    width: 100%;
    padding: .8rem 1rem;
`

export const LoginButton = styled.button`
    margin-top: 70px;
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