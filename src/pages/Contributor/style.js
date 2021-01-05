import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: #F8F8F8;
`

export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
`

export const TitleLeftSide = styled.div`
    flex: 3;
`

export const TitleRightSide = styled.div`
    display: flex;
    border-color: #B2B2B2;
    margin-right: 50px;
    margin-left: -50px; // Fixing the margin that title element gives by default
    border-width: 2px;
    border-style: none none solid none;
    flex: 1;
`

export const LeftSideButtonDiv = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    margin-right: 10px;
`

export const RightSideButtonDiv = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`

export const DefaultButton = styled.button`
    height: 40px;
    font-size: 15px;
    width: 100%;
    border: none;   
    border-radius: 40px;
    background-color: ${props => props.blue ? 'blue' : 'red'};
    color: white;
`