import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex: 0 0 100vh;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: #F8F8F8;
`

export const EmptyDiv = styled.div`
    min-width: 150px;
`

export const MainDiv = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
`

export const SearchDiv = styled.div`
    width: 100%;
    height: 100px;
`

export const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    box-sizing: border-box;
`

export const LeftSideButtonDiv = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    margin-right: 10px;
`

export const RightSideButtonDiv = styled.div`
    display: inline-block;
    position: relative;
    align-items: center;
    flex: 1;
`

export const DefaultInput = styled.input`
    height: 40px;
    font-size: 15px;
    width: 100%;
    border: none;
    border-radius: 40px;
    background-color: #F8F8F8;
    border-style: solid;
    border-width: 2px;
    border-color: #B3B3B3;
    color: #B3B3B3;
    padding: 0 30px 0 30px;
`

export const DefaultSelect = styled.select`
    height: 40px;
    font-size: 15px;
    width: 100%;
    border: none;
    border-radius: 40px;
    background-color: #F8F8F8;
    border-style: solid;
    border-width: 2px;
    border-color: #B3B3B3;
    color: #B3B3B3;
    padding: 0 30px 0 30px;
`

export const SearchIcon = styled.div`
    display: block;
    position: absolute;
    right: 15px;
    top: 10px;
`

export const ContentDiv = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    height: 100%;
`

export const Item = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px 0 20px;
    min-width: calc(50% - 20px);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    height: 100px;
    background-color: white;
    margin-bottom: 20px;
`

export const ItemsRow = styled.div`
    height: 100%;
    width: calc(100% - 30px);
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: flex-start;
`

export const Avatar = styled.img`
    margin-right: 20px;
    width: 50px;
    border-radius: 50%;
`

export const DefaultText = styled.h1`
    font-size: 18px;
    display: flex;
    align-items: center;
`