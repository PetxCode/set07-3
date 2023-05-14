import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import pix from "../../assets/ani.gif"
import { AiOutlineLaptop } from "react-icons/ai"
import { useGetUser } from '../../hooks/useGetUser'


const TopRecall: React.FC<PropsWithChildren> = ({ children }) => {
    const userData: any = useGetUser()



    return (
        <Container>
            <Top>
                <Title>Dashboard</Title>
                <Title> {moment(Date.now()).format('dddd')}, {moment(Date.now()).format("MMM Do YY")}</Title>
            </Top>
            <TopCard>
                <Content>
                    <TopHead>Welcome back {userData.userName}</TopHead>

                    <SubTitle>
                        {
                            userData?.motivate ? <div>{userData?.motivate}</div> : <div>Please go to Update profile and add, what daily MOTIVATEs you!</div>
                        }
                    </SubTitle>
                </Content>

                <Image src={pix} />
            </TopCard>
            {children}
        </Container>
    )
}

export default TopRecall



const Space = styled.div`
margin-bottom: 16px;
`

const Text2 = styled.div`
font-weight: 800;
margin-right: 20px;
font-size: 12px
`

const Text = styled.div`
font-weight: 800;
margin-right: 20px;
`

const Rate2 = styled.div`
font-size: 9px;
color: silver;
line-height: 1;
font-weight: normal;
`

const Rate = styled.div`
font-size: 10px;
color: silver;
line-height: 1;
font-weight: normal;
margin-bottom: 6px;
`

const Bar = styled.div`
width: 60px;
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


const Told = styled.div`
font-size: 70px;
font-weight: 700;
color: #36147f
`
const Arrow1 = styled.div`
font-size:10px;
text-align: center;
`
const Arrow = styled.div``

const Days = styled.div`
text-transform: uppercase;
font-weight:600;
text-align: center;
font-size:13px
`

const Service = styled.div`
margin-left: 10px;
margin-right: 10px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
height: 300px;
margin-top: 20px;
display:flex;
border-radius: 3px;
justify-content: center;
align-items: center;
padding: 0 20px;
flex-direction: column;
line-height: 1;
`

const Container = styled.div`
width: 94%;
padding-bottom: 20px;
`

const IconHolder = styled.div`
margin: 2px 8px;
background: rgba(225, 225, 225, 0.3);
width:26px;
height:24px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
`

const TopHeader = styled.div`
font-size: 12px;
`


const InTexter = styled.div`
font-size: 10px;
line-height: 1.3;
`
const Cont = styled.div``
const Icons = styled(AiOutlineLaptop)`
font-size: 25px;
margin: 0px 5px;
`

const ButCard = styled.div`
width: 160px;
height: 50px;
border-radius: 5px;
background-color: #36147f;
color: white;
display:flex;
 justify-content: center;
 align-items: center;

margin: 5px
`

const Task = styled.div`

`

const ButHold = styled.div`
display:flex;
margin-top: 10px;
flex-wrap: wrap;
`

const Hold = styled.div`
display:flex`

const InText = styled.div`
font-weight: 600;
font-size: 12px;
margin-top:10px
`

const HistoryStart = styled.div`
width: 200px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
height: 300px;
padding: 0 25px;
margin-top: 20px;
margin-left: 10px;
margin-right: 10px;
border-radius: 3px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const History = styled.div`
width: 300px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
height: 300px;
margin-top: 20px;
margin-left: 10px;
margin-right: 10px;
border-radius: 3px;
overflow: hidden;
`
const HistoryCard = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const Image = styled.img`
height: 250px;
margin-top:-80px ;

@media screen and (max-width: 450px){
    height:230px
  }

@media screen and (max-width: 400px){
    height:150px
  }
`

const SubTitle1 = styled.div`
font-size: 14px;
opacity: 0.7;
padding:10px 0px;
text-align: center;
`

const SubTitle = styled.div`
font-size: 14px;
opacity: 0.7;
padding:10px 0px;
text-align: left;
`

const TopHead1 = styled.div`
font-weight: 700;
font-size: 22px;
`

const TopHead = styled.div`
font-weight: 700;
`

const Content = styled.div`
@media screen and (max-width: 450px){
    margin-top: -10px;
    margin-bottom: 10px;
  }
`

const TopCard = styled.div`
padding: 0 20px;
background-color: #F7E5E9;
margin-top: 80px;
display:flex;
border-radius: 5px;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

@media screen and (max-width: 600px){
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`

const Title = styled.div``

const Topie = styled.div`
display:flex;
justify-content: space-between;
margin: 0 10px;
margin-top: 20px;
margin-bottom: 10px;
@media screen and (max-width: 800px) {
    /* display:none; */
}`

const Top = styled.div`
display: flex;
justify-content: space - between;
margin: 0 10px;
margin-top: 20px;
margin-bottom: 10px;
@media screen and(max-width: 800px) {
    display:none;
}

`