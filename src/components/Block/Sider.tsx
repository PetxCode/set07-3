import React, { useContext } from "react"
import styled from "styled-components"
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs"
import { MdDashboardCustomize, MdWorkHistory } from "react-icons/md"
import { BsPersonWorkspace } from "react-icons/bs"
import { AiFillSetting } from "react-icons/ai"
import { ContextState } from "../../Global/stateProvider"
import { NavLink } from "react-router-dom"
import img from "../../assets/ani.gif"

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

                <SideNav>
                    <Nav to="/dashboard"> <Icon /> {toggle ? <Span>Dashboard</Span> : null}</Nav>
                    <Nav to="/dashboard/bookings"> <Icon3 /> {toggle ? <Span>Book Space</Span> : null}</Nav>
                    <Nav to="/dashboard/history"> <Icon4 /> {toggle ? <Span>View History</Span> : null}</Nav>
                    <Nav to="/dashboard/settings"> <Icon5 /> {toggle ? <Span>Settings</Span> : null}</Nav>


                </SideNav>


            </Main>
            <div style={{ marginTop: "100px" }} />
            <div style={{ display: "flex", justifyContent: "center" }} >
                <ImageHolder>
                    <Image src={img} />
                </ImageHolder>
            </div>
        </Container>
    )
}

const Image = styled.img`
height: 150px;
`
const ImageHolder = styled.div`
width: 89%;
height: 150px;
border-radius: 10px;
overflow: hidden;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

const Icon5 = styled(AiFillSetting)`
font-size: 30px;
margin-right:10px;
transition: all 350ms;
`;

const Icon4 = styled(MdWorkHistory)`
font-size: 30px;
margin-right:10px;
transition: all 350ms;
`;

const Icon3 = styled(BsPersonWorkspace)`
font-size: 30px;
margin-right:10px;
transition: all 350ms;
`;

const Icon = styled(MdDashboardCustomize)`
font-size: 30px;
margin-right:10px;
transition: all 350ms;
`;

const Span = styled.div`
transition: all 350ms;

`
const Nav = styled(NavLink)`
padding-left: 10px;
padding-top: 10px;
padding-bottom: 10px;
display:flex;
align-items: center;
transition: all 350ms;
opacity: 0.7;
text-decoration: none;
width: 120%;
margin: 3px 0;
color: black;

:hover{
    cursor: pointer;
    opacity: 1;
    background-color: rgba(140, 29, 140, 0.3);
}

&.active{
    opacity: 1;
    color: #8c1d8c;
}

&.active ${Icon} {
    opacity: 1;
    color: #8c1d8c;
}

`

const SideNav = styled.div`
display:flex;
width: 100%;
margin-top: 10px;
flex-direction: column;


`

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
width: 100%;
align-items: flex-end;
margin-top: 10px;
flex-direction: column;
`

const Container = styled.div<{
    w: string
}>`
transition:all 350ms;
position: fixed;
height: 100%;
/* height: calc(100vh - 110px); */
background-color: #fdeafc;
width: ${({ w }) => w ? "200px" : "50px"};
top:62px;
overflow: hidden;
border-right: 1px solid silver;
z-index: 100;
`