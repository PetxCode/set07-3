import React, { useContext } from "react"
import styled from "styled-components"
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs"
import { ContextState } from "../../Global/stateProvider"

export const Sider = () => {
    const { toggle, setToggle } = useContext(ContextState)

    const onToggle = () => {
        setToggle(!toggle)
    }

    return (
        <Container w={toggle ? "ee" : ""} >
            <Main>
                {
                    toggle ? <Icon2
                        onClick={onToggle}
                    /> : <Icon1 onClick={onToggle} />
                }
            </Main>
        </Container>
    )
}


const Icon1 = styled(BsArrowBarRight)`
margin-top: 10px;
font-size:20px;
:hover{
    cursor: pointer;
}
`
const Icon2 = styled(BsArrowBarLeft)`
margin-top: 10px;

font-size:20px;
:hover{
    cursor: pointer;
}
`

const Main = styled.div`
display:flex;
width: 90%;
justify-content: flex-end;
margin-top: 10px
`

const Container = styled.div<{
    w: string
}>`
transition:all 350ms;
position: fixed;
height: calc(100vh - 110px);
background-color: #e0e0e0;
width: ${({ w }) => w ? "200px" : "50px"};
top:62px

`