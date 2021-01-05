import React, {useState, useEffect} from 'react'
import {
    Container,
    EmptyDiv,
    MainDiv,
    SearchDiv,
    LeftSideButtonDiv,
    RightSideButtonDiv,
    DefaultInput,
    DefaultSelect,
    ButtonsDiv,
    SearchIcon,
    ContentDiv,
    ItemsDiv,
    Item,
    ItemsRow,
    Avatar,
    DefaultText
}from './style'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu/Menu'
import Title from '../../components/Title/Title'
import api from '../../api/api'
import getCookie from '../../components/GetCookie/GetCookie'
import { AiOutlineSearch } from 'react-icons/ai'

const MainPage = () => {

    let session = getCookie('userToken'), counter
    
    const [data, setData] = useState()
    
    
    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {

        api.get('/contributors/page=1/order=asc', {
            headers:{
                Authorization: `Bearer ${session}`
            }
        }).then(receivedData => setData(receivedData.data))

    }

    console.log(data)

    return(

        <Container>

            <Menu />
            <Title titleName={'Listagem de colaboradores'} />

            <MainDiv>
                <EmptyDiv>

                </EmptyDiv>

                <SearchDiv>
                    <ButtonsDiv>
                        <LeftSideButtonDiv>
                            <DefaultSelect name="order">
                                <option value="ASC">ASC</option>
                                <option value="DESC">DESC</option>
                            </DefaultSelect>
                        </LeftSideButtonDiv>
                                
                        <RightSideButtonDiv>
                            <DefaultInput placeholder="Procurar"/>
                            <SearchIcon>
                                <AiOutlineSearch />
                            </SearchIcon>
                        </RightSideButtonDiv>
                    </ButtonsDiv>
                </SearchDiv>

            </MainDiv>

            <ContentDiv>
                <EmptyDiv>

                </EmptyDiv>

                <ItemsRow>
                    {data && data.map(user => (
                        
                            <Item>
                                <Link to={`/contributor/${user.id}`} style={{
                                    textDecoration: 'none', 
                                    color: 'black', 
                                    display: 'flex', 
                                    justifyContent: 'center'
                                    }}>
                                    <Avatar src="https://www.w3schools.com/howto/img_avatar.png" />
                                    <DefaultText>{user.nome}</DefaultText>
                                </Link>
                            </Item>
                        
                    ))}
                </ItemsRow>
                       


            </ContentDiv>

        </Container>

    )

}

export default MainPage