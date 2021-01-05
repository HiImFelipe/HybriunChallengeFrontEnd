import React, { useState } from 'react'
import {
    NavBar,
    LeftSideDiv,
    RightSideDiv,
    Avatar,
    DefaultText,
    BellDiv,
    NotificationNumber,
    Aside,
    DropDownItem,
    CenterDiv,
    HoverMenuIcon
} from './style'
import { IconContext } from 'react-icons'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsGrid } from 'react-icons/bs'
import { FiBell } from 'react-icons/fi'
import { IoPersonAddSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import getCookie from '../../components/GetCookie/GetCookie'

export default function Menu(){

    let [display, setDisplay] = useState(false)

    const userName = getCookie('userName')

    const changeDisplayType = () => {

        display ? setDisplay(false) : setDisplay(true)

    }

    return(

        <IconContext.Provider value={{ size: 25 }}>
            <NavBar>

                <LeftSideDiv>

                    <HoverMenuIcon>
                        <GiHamburgerMenu onClick={() => changeDisplayType()}/>
                    </HoverMenuIcon>

                    <Aside display={display}>
                        <DropDownItem>
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <CenterDiv>
                                    <GiHamburgerMenu size={40} color={'Blue'} />
                                </CenterDiv>
                                <DefaultText>
                                    Listagem de colaboradores
                                </DefaultText>
                            </Link>
                        </DropDownItem>

                            <hr style={{marginLeft: '10px', marginRight: '10px'}}/>

                        <DropDownItem>
                            <Link to={'/addcontributor'} style={{ textDecoration: 'none' }}>
                                <CenterDiv>
                                    <IoPersonAddSharp size={40} color={'Blue'} />
                                </CenterDiv>
                                <DefaultText>
                                    Adicionar um colaborador
                                </DefaultText>
                            </Link>
                        </DropDownItem>
                    </Aside>

                </LeftSideDiv>

                <RightSideDiv>

                    <BellDiv>
                        <FiBell color={"#B9BDBC"}/>
                        <NotificationNumber>
                            3
                        </NotificationNumber>
                    </BellDiv>

                    <BsGrid color={"#B9BDBC"} />
                    <DefaultText contributorname>{userName}</DefaultText>
                    <Avatar src="https://www.w3schools.com/howto/img_avatar.png"/>
                </RightSideDiv>

            </NavBar>
        </IconContext.Provider>

    )

}