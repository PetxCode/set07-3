import React, { useState } from "react"
import styled from "styled-components"
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs"

export const Sider = () => {
    const [toggle, setToggle] = useState<boolean>(false)

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


const Icon1 = styled(BsArrowBarRight)``
const Icon2 = styled(BsArrowBarLeft)``

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
height: calc(100vh - 122px);
background-color: silver;
width: ${({ w }) => w ? "200px" : "50px"}

`