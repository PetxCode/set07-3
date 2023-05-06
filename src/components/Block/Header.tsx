import React from "react"
import styled from "styled-components"
import { BsThreeDotsVertical } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import Button from "../reUse/Button"

import { AiOutlineCrown } from "react-icons/ai"
import { BsPersonBoundingBox } from "react-icons/bs"

export const Header = () => {
    return (
        <div>
            <Container>
                <Main>
                    <Div>
                        <Logo>CodeLab</Logo>
                        <Text>Browse</Text>
                        <Icon />
                    </Div>
                    <Div>
                        <InputHolder>
                            <Input placeholder="search" />
                            <Icon2 />
                        </InputHolder>
                    </Div>
                    <Div>
                        <IconHolder>
                            <Circle>10</Circle>
                            <Icon3 />
                        </IconHolder>
                        <Button
                            title="Log In"
                            tc="black"
                            bg="silver"
                        />
                        <Button
                            title="Sign Up"
                            tc="white"
                            bg="purple"
                        />
                        <Icon4 />
                    </Div>
                </Main>
            </Container>
        </div>
    )
}

// const Circle = styled.div``

const Circle = styled.div`
width:15px;
height:15px;
border-radius: 50%;
background-color: red;
color: white;
display:flex;
justify-content: center;
align-items: center;
font-size: 7px;
font-weight:900;
position:absolute;
right: 5px;
top:-5px;
`
const IconHolder = styled.div`
position: relative;
`

const Icon3 = styled(AiOutlineCrown)`
padding: 0 10px;
font-size:18px;
`
const Icon4 = styled(BsPersonBoundingBox)`
padding: 0 10px;
font-size:18px;
`;
const Icon2 = styled(BiSearch)`
padding: 0 10px
`

const Input = styled.input`
flex:1;
height: 22px;
outline: 1px solid black;
padding-left: 10px;
:focus{
    outline: 2px solid #a10da1;
}

::placeholder{
    padding-left: 0px
}
`

const InputHolder = styled.div`
width:300px;
height: 30px;
background-color: #e2e0e0;
display:flex;
align-items: center;
border-radius: 0px 4px 4px 0px;


`

const Icon = styled(BsThreeDotsVertical)`
margin-top:5px;
padding: 4px 6px;
border-radius: 3px;

:hover{
    background-color: #e1e1e1;
    cursor: pointer;
}
`
const Text = styled.div`
margin: 0 10px;
font-weight: 700;
transition: all 0.08s ease-in-out;

:hover{
    color: #a10da1;
    cursor: pointer;
}
`
const Logo = styled.div`
font-weight: 900;
font-size: 12px;
cursor: pointer;
`

const Div = styled.div`
display:flex;
align-items: center;
height: 100%;

`;

const Main = styled.div`
width: 98%;
height: 100%;
display:flex;
justify-content: space-between;
align-items:center
`

const Container = styled.div`
width: 100%;
height: 60px;
background-color: white;
border-top: 1px solid silver;
border-bottom: 1px solid silver;
position: fixed;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
 rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
display:flex;
justify-content: center;
z-index:10;

/* border: 1px 0px solid black; */

`