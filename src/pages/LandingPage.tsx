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
                    <Card />
                </Main>
            </Container>
        </Wrapper>
    )
}

export default LandingPage

const Main = styled.div`
width:90%
`

const Container = styled.div<{ w: string }>`
width:calc(100% - ${({ w }) => w});
height: calc(100vh - 122px);
/* background-color: red; */
display:flex;
transition: all 360ms;
`

const Wrapper = styled.div`
width: 100%;
display:flex;
justify-content: flex-end;
`