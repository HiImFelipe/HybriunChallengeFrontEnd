import styled from 'styled-components'

export const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    height: 100px;
    width: 100%;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(60, 60, 60, 0.2);
    z-index: 2;
`

export const LeftSideDiv = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 30px;
`

export const RightSideDiv = styled.div`
    flex: 5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Avatar = styled.img`
    margin-right: 30px;
    width: 30px;
    border-radius: 50%;
`
export const DefaultText = styled.h3`
    font-size: 14px;
    text-align: center;
    margin-right: 20px;
    margin-left: 15px;
    text-decoration: none !important;
    color: ${props => props.contributorname ? "#B9BDBC" : "black"};
    font-weight: ${props => props.contributorname ? "bold" : "lighter"};
`

export const BellDiv = styled.div`
    margin-right: 30px;
    display: inline-block;
    position: relative;
`

export const NotificationNumber = styled.div`
    display: block;
    position: absolute;
    font-size: 8px;
    text-align: center;
    min-width: 25px;
    border-style: solid;
    border-color: black;
    border-width: 2px;
    border-radius: 40%;
    right: -22px;
    top: -10px;
`

export const Aside = styled.div`
    display: ${props => props.display ? "block" : "none"};
    position: absolute;
    height: calc(100% - 100px);
    left: 0;
    top: 100px;
    background-color: #f9f9f9;
    width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`

export const DropDownItem = styled.h1`
    color: black;
    padding: 12px 0;
    text-decoration: none;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: left;
`

export const CenterDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    &:hover {
        cursor: pointer;
    }
`

export const HoverMenuIcon = styled.div`
    &:hover {
        cursor: pointer;
    }
`