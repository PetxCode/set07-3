import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Components/Card'
import { ContextState } from '../Global/stateProvider'

const LandingPage = () => {
    const { toggle } = useContext(ContextState)

    return (
        <Wrapper>
            <Container w={toggle ? "200px" : "50px"} >
                <Main>
                    <Text>Landing Page</Text>
                    <Card />
                </Main>
            </Container>
        </Wrapper>
    )
}

export default LandingPage

const Text = styled.div`
margin: 10px 20px;
font-weight: 700;
`

const Main = styled.div`
width:90%
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