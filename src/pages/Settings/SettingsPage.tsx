import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import moment from 'moment'
import { ContextState } from '../../Global/stateProvider'
import RightScreenPage from '../../components/Components/RightScreenPage'
import LeftScreenPage from '../../components/Components/LeftScreenPage'
import TopRecall from '../../components/reUse/TopRecall'

const SettingPage = () => {
    const { toggle } = useContext(ContextState)

    return (
        <Wrapper>
            <Container w={toggle ? "200px" : "50px"} >
                <Main>
                    {/* <Text>Landing Page</Text> */}
                    <Top>
                        <Title>Dashboard</Title>
                        <Title> {moment(Date.now()).format('dddd')}, {moment(Date.now()).format("MMM Do YY")}</Title>
                    </Top>
                    {/* <Card /> */}
                    <ViewScreen>
                        {/* <RightScreenPage /> */}

                        {/* right screen */}
                        <RightScreen>
                            <TopRecall><div>Start Here</div></TopRecall>

                        </RightScreen>
                        <LeftScreen>
                            <LeftScreenPage />
                        </LeftScreen>
                        {/* left screen */}

                    </ViewScreen>
                </Main>
            </Container>
        </Wrapper>
    )
}

export default SettingPage


const Title = styled.div``

const Top = styled.div`

 display:none;

@media screen and (max-width: 800px) {
    display:flex;
justify-content: space-between;
margin: 0 10px;
margin-bottom: 20px;
margin-top: 20px;
}
`

const LeftScreen = styled.div`
flex: .2;
display: flex;
justify-content: center;
@media screen and (max-width: 800px) {
    /* display:none */
}
`

const RightScreen = styled.div`
flex: .8;
/* padding: 0 30px; */
background-color: #F6F6FA;
border-left: 1px solid rgba(0,0,0,0.1);
border-right: 1px solid rgba(0,0,0,0.1);
display: flex;
justify-content: center;
@media screen and (max-width: 800px) {
    flex:1
}
`


const ViewScreen = styled.div`
width: 100%;
display: flex;
justify-content: center;

@media screen and (max-width: 800px) {
    flex-direction: column-reverse;
}
`


const Text = styled.div`
margin: 10px 20px;
font-weight: 700;
`

const Main = styled.div`
width:96%
`

const Container = styled.div<{ w: string }>`
width:calc(100% - ${({ w }) => w});
min-height: calc(100vh - 122px);
display:flex;
transition: all 360ms;
`

const Wrapper = styled.div`
width: 100%;
display:flex;
justify-content: flex-end;
padding-top: 65px;
background-color: #f8f8f8;
height:100%;
padding-bottom:100px;
`