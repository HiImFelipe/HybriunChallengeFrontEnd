import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex: 0 0 100vh;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: green;
`

export const LoginDiv = styled.div`
    height: 100%;
    margin: 40px 20px 40px 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media (min-width: 700px){
        height: 70%;
        flex-direction: row;
        margin: 100px 60px 100px 60px;
    }
`

export const LoginPanel = styled.div`
    flex: 3;
    background-color: white;
    padding: 60px 40px 40px 40px;
    box-sizing: border-box;
    border-radius: 3px;

    @media (min-width: 700px){
        flex: 2;
    }
`

export const WelcomeTextDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media (min-width: 700px){
        flex: 3;
        margin-bottom: 0;
        margin-right: 60px;
    }
`

export const MainTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: white;
    font-size: 2.5em;

    @media (min-width: 700px){
        font-size: 7em;
    }

` 
export const SubTitle = styled.h1`
    margin: 0;
    font-size: 1.5em;
    font-weight: lighter;
    color: white;

    @media (min-width: 700px){
        font-size: 4em;
    }
`
export const MainTextDiv = styled.div`
    flex: 1;
` 
export const BottomTextDiv = styled.div`
    display: flex;
    flex: 1 0 20px;
    margin-top: 2em;

    @media (min-width: 700px){        
        flex: 1;
        min-width: 100px;
        margin-top: 0;
        align-items: flex-end;
    }
` 

export const DefaultText = styled.h2`
    margin: 0;
    font-size: 1em;
    font-weight: 900;
    color: ${props => props.logo ? "white" : "black"};

    @media (min-width: 700px){
        font-size: 40px;
    }

`