import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`

export const EmptyDiv = styled.div`
    min-width: 150px;
`

export const DefaultInput = styled.input`
    border-style: none none solid none;
    border-color: #E0E0E0;
    font-size: ${props => props.contributorname ? "24px" : "18px"};
    height: 60px;
    width: 100%;
`
export const FormDiv = styled.div`
    box-sizing: border-box;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 500px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    border-radius: 20px;
`
export const TopDiv = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    margin-bottom: 10px;
`
export const PictureDiv = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1
`

export const NameDiv = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    flex: 3
`
export const Avatar = styled.img`
    height: 80px;
    width: auto;
    border-radius: 50%;
`

export const DefaultText = styled.h1`
    font-size: 20px;
`

export const MiddleDiv = styled.div`
    margin-top: 20px;
    height: 180px;
    width: 100%;
    display: flex;
`

export const LeftSide = styled.div`
    flex: 2;
`

export const RightSide = styled.div`
    margin-left: 30px;
    flex: 3;
`

export const OcupacaoDiv = styled.div`
    color: blue;
    margin-top: 10px;
    height: 100px;
    width: 220px;
`

export const HorarioDiv = styled.div`
    color: blue;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: 80px;
    width: 100%;
    margin-bottom: 10px;
`

export const HorarioDivRight = styled.div`
    flex: 1;
    display: flex;
    margin-left: 10px;
`

export const HorarioDivLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

export const ErroHandler = styled.h1`
    font-size: 18px;
    color: red;
    margin-top: 20px;
`