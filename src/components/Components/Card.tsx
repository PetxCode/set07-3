import React, { useState } from 'react'
import styled from 'styled-components'
import { RiArrowDropDownLine } from "react-icons/ri"
const Card = () => {

    const [counter, setCounter] = useState<number>(1)
    const [counter2, setCounter2] = useState<number>(1)

    const addCount = () => {
        setCounter((el: number) => {

            if (el === 0) {
                return el = 1
            } else {
                return el + 1
            }
        })
    }

    const addCount2 = () => {
        setCounter2((el: number) => {

            if (el === 0) {
                return el = 1
            } else {
                return el + 1
            }
        })
    }

    const removeCount = () => {
        setCounter((el: number) => {
            if (el <= 1) {
                return el = 30
            } else {
                return el - 1
            }
        })
    }

    console.log(
        21 % 5
    )

    return (
        <div>
            <Container>
                <Main>
                    <MainBG>
                        <MainCard>
                            <Div bg="" >
                                <Icon r="e"
                                    onClick={() => {
                                        addCount()
                                        addCount2()
                                    }}
                                />
                                <Text>{counter % 30 + 1}</Text>
                                <SubText>
                                    {
                                        counter + 1 < 31 ? <div>January</div> :
                                            counter + 1 < 61 ? <div>Feburary</div> :
                                                counter + 1 < 91 ? <div>March</div> :
                                                    counter + 1 < 121 ? <div>April</div> :
                                                        counter + 1 < 151 ? <div>May</div> :
                                                            counter + 1 < 18 ? <div>June</div> :
                                                                null
                                    }
                                </SubText>
                                <Icon r="" onClick={removeCount} />
                            </Div>
                            <Div bg="f" >{<div>{counter}</div>}</Div>
                            <Div bg="r" >3</Div>
                            <Div bg="r" >4</Div>
                        </MainCard>
                    </MainBG>
                </Main>
            </Container>
        </div>
    )
}

export default Card

const Start = styled.div`
min-height: 100%;
background-color: red;
`


const SubText = styled.div``
const Text = styled.div`
font-size: 55px;
font-weight: 700;
line-height: 0.9;
`
const Icon = styled(RiArrowDropDownLine) <{ r: string }>`
margin: 10px 0;
font-size: 30px;
border-radius: 5px;
width: 60px;
height: 65px;
display: flex;
justify-content: center;
align-items: center;
transition: all 300ms;
transform: rotate(${({ r }) => r ? "180deg" : "0deg"});
:hover{
    background-color: rgba(225, 225, 225, 0.3);
    cursor: pointer;
}
`

const Div = styled.div<{ bg: string }>`
width: 110px;
height:  180px;;
background-color:${({ bg }) => bg ? "white" : "transparent"} ;
margin: 0 5px;
border-radius:3px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const MainCard = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
padding: 0 5px;
/* width: 500px; */
min-height: 200px;
border-radius: 10px;
background: rgb(254,231,251);
background: linear-gradient(60deg, rgba(254,231,251,1) 0%, rgba(6,103,156,1) 0%, rgba(95,192,231,1) 100%);
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
color: white
`


const MainBG = styled.div`
width: 100%;
height: 100%;
background: radial-gradient(
    rgba(0, 0, 0, 0.2) 8%,
    transparent 2%
);
background-position: 0% 0%;
background-size: 3vmin 3vmin;
display: flex;
justify-content: center;
padding-top: 40px
`

const Main = styled.div`
width: 99%;
height: 900px;
border-radius: 10px;
border: 1px solid silver;
background: rgb(254,231,251);
background: linear-gradient(318deg, rgba(254,231,251,1) 0%, rgba(229,242,249,1) 39%, rgba(234,249,255,1) 95%);
`;

const Container = styled.div`
width: 100%;
margin: 20px;
`