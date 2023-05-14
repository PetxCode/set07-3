import React from 'react'
import styled from 'styled-components'
import Button from '../reUse/Button'
import { useGetUser } from '../../hooks/useGetUser'
import { useDispatch } from 'react-redux'
import { logout } from '../../Global/GlobalState'
import { useNavigate } from 'react-router-dom'

const LeftScreenPage = () => {
    const userData: any = useGetUser()
    const dispatch = useDispatch()
    const navigation = useNavigate()
    return (
        <Container>
            <Button
                title="Log Out"
                tc="white"
                bg="purple"
                onClick={() => {
                    dispatch(logout())
                    navigation("/")
                }}
            />

            <Image src={userData?.avatar} />

            <Title>
                {userData?.userName}
            </Title>
            <Job>{userData?.prof}</Job>
            <br />
            <Div>
                <Top> Technical Core Strenght</Top>
                <Place> My Top Five</Place>

                <Wid>
                    <Box>
                        <Bullet>1</Bullet>
                        <Text>
                            <div>Server side</div>
                            <Rate>Rating: 7</Rate>
                        </Text>
                        <Chart >
                            <Bar w={`${(8.6 * 10 / 100) * 100}px`} />
                        </Chart>
                    </Box>
                    <Box>
                        <Bullet>2</Bullet>
                        <Text>
                            <div>FrontEnd</div>
                            <Rate>Rating: 8</Rate>
                        </Text>
                        <Chart >
                            <Bar w={`${(8 * 10 / 100) * 100}px`} />
                        </Chart>
                    </Box>
                    <Box>
                        <Bullet>3</Bullet>
                        <Text>
                            <div>Email Server</div>
                            <Rate>Rating: 9</Rate>
                        </Text>
                        <Chart >
                            <Bar w={`${(9 * 10 / 100) * 100}px`} />
                        </Chart>
                    </Box>
                    <Box>
                        <Bullet>4</Bullet>
                        <Text>
                            <div>Design Pattern</div>
                            <Rate>Rating: 6</Rate>
                        </Text>
                        <Chart >
                            <Bar w={`${(6 * 10 / 100) * 100}px`} />
                        </Chart>
                    </Box>
                </Wid>
            </Div>
        </Container>
    )
}

export default LeftScreenPage

const Text = styled.div`
font-weight: 800;
margin-right: 20px;
width: 100px
`

const Rate = styled.div`
font-size: 10px;
color: silver;
line-height: 1;
font-weight: normal;
`

const Bar = styled.div<{ w: string }>`
width: ${({ w }) => w};
height:5px;
background-color: purple;
position: absolute;
left:0;
top:0
`

const Chart = styled.div`
width: 100px;
height:5px;
background-color: rgba(192, 192, 192, .3);
border-radius: 5px;
position: relative;
overflow: hidden;
`

const Bullet = styled.div`
/* width: 20px;
height: 20px; */
padding: 4px 12px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(255, 130, 141,0.1);
border-radius: 2px;
margin-right: 10px;
`

const Box = styled.div`
display:flex;
/* justify-content: center; */
align-items: center;
padding: 10px
`

const Wid = styled.div`
font-size: 12px;
width: 100%;

`

const Place = styled.div`
font-size: 12px;
color: silver;
margin-top: 5px;
display:flex;
flex-direction: column;
justify-content: flex-start;
text-transform: uppercase;
font-weight: 600;
`


const Div = styled.div`
flex-direction: column;
width:100%;
padding-left: 20px;

`

const Container = styled.div`
display:flex;
align-items: center;
flex-direction: column;
/* width: 90%; */
margin-bottom: 20px;
margin-top: 20px;
`

const Job = styled.div`
font-size: 12px;
color: silver;

`

const Title = styled.div`
margin-top: 10px;
font-weight: 700;
`

const Image = styled.img`
width: 120px;
height: 120px;
border-radius: 50%;
background-color: rgba(0,0,0,0.1);
border: 1px solid purple;
margin-top: 50px;
`

const Top = styled.div`
font-size: 12px;
color: silver;
margin-top: 15px;
display:flex;
flex-direction: column;
justify-content: flex-start;


`