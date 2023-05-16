import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import moment from 'moment'
import { ContextState } from '../../Global/stateProvider'
import LeftScreenPage from '../../components/Components/LeftScreenPage'
import TopRecall from '../../components/reUse/TopRecall'
import { useGetUser } from '../../hooks/useGetUser'
import HistoryTable from './HistoryTable'

const MyHistoryPage = () => {
  const { toggle } = useContext(ContextState) 
    const user: any = useGetUser()
    const [show, setShow] = useState<boolean>(true)

    return (
        <Wrapper>
            <Container w={toggle ? "200px" : "50px"} >
                <Main>
                    {/* <Text>Landing Page</Text> */}
                    <Top>
                        <Title>Dashboard</Title>
                        <Title> {moment(Date.now()).format('dddd')}, {moment(Date.now()).format("MMM Do YY")}</Title>
                    </Top>
                    {/* <Card /> */}
                    <ViewScreen>
                        {/* <RightScreenPage /> */}

                        {/* right screen */}
                        <RightScreen>
                            <TopRecall>

                                <div style={{ display: "flex", justifyContent: "center" }} >
                                    <MainHold>


                                        <LoaderHold
                                            bg={show ? "purple" : "rgba(125, 2, 196, 0.7)"} >
                                            <Holding>

                                                <span>Viewing your </span>
                                                <Div>History logs</Div>

                                            </Holding>
                                        </LoaderHold>

                                        <Space />

                                    </MainHold>
                                </div>
                                <div>

                                    <HistoryTable />

                                </div>
                            </TopRecall>

                        </RightScreen>
                        <LeftScreen>
                            <LeftScreenPage />
                        </LeftScreen>
                        {/* left screen */}

                    </ViewScreen>
                </Main>
            </Container >
        </Wrapper >
    )
}

export default MyHistoryPage

const Space = styled.div`
  flex:1
`;


const Holding = styled.div`
  margin-left: 10px;
  /* align-items: center; */
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  height: 100%;
  color: white;

  span {
    font-size: 12px;
    opacity: 0.8;
  }
`;
const Div = styled.div`
  font-weight: bold;
`;
const LoaderHold = styled.div<{ bg: string }>`
  height: 100%;
  background-color: ${({ bg }) => bg};
  width: 25%;
  border-radius: 10px;
  margin-right: 20px;
transition: all 350ms;
  :hover{
    cursor: pointer;
    background-color:  rgba(255, 165, 0, 0.8);
  }
`;

const MainHold = styled.div`
margin-top: 10px;
  display: flex;
  width: 90%;
  height: 65px;
  background-color: white;
  border-radius: 10px;
  /* justify-content: space-between; */
  align-items: center;
  font-size: 15px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const Title = styled.div``

const Top = styled.div`

 display:none;

@media screen and (max-width: 800px) {
    display:flex;
justify-content: space-between;
margin: 0 10px;
margin-bottom: 20px;
margin-top: 20px;
}
`

const LeftScreen = styled.div`
flex: .2;
display: flex;
justify-content: center;
@media screen and (max-width: 800px) {
    /* display:none */
}
`

const RightScreen = styled.div`
flex: .8;
/* padding: 0 30px; */
background-color: #F6F6FA;
border-left: 1px solid rgba(0,0,0,0.1);
border-right: 1px solid rgba(0,0,0,0.1);
display: flex;
justify-content: center;
@media screen and (max-width: 800px) {
    flex:1
}
`


const ViewScreen = styled.div`
width: 100%;
display: flex;
justify-content: center;

@media screen and (max-width: 800px) {
    flex-direction: column-reverse;
}
`

const Main = styled.div`
width:96%
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