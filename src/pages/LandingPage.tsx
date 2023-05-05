import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Components/Card'

const LandingPage = () => {
    const [toggle, setToggle] = useState<boolean>(false)

    const onToggle = () => {
        setToggle(!toggle)
    }

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

const Main = styled.div``

const Container = styled.div<{ w: string }>`
width:calc(100% - ${({ w }) => w});
height: calc(100vh - 122px);
/* background-color: red; */
display:flex;
`

const Wrapper = styled.div`
width: 100%;
display:flex;
justify-content: flex-end;
`