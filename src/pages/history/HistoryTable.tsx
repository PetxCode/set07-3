import React, { useEffect } from "react";
import styled from "styled-components";

import { useGetHistory } from "../../hooks/useGetHistory";


const HistoryTable: React.FC = () => {
    const history: any = useGetHistory()
    useEffect(() => {
    }, []);


    return (
        <div style={{ display: "flex", justifyContent: "center" }} >
            <Container>
                <Wrapper>
                    <Title>Reading data of History Logs</Title>

                    <Wid>

                        {
                            history.map((props: any, i: number) => (
                                <Box key={props._id} >
                                    <Bullet>{i + 1}</Bullet>


                                    <Text>
                                        <div>₦{props?.cost}</div>
                                        <Rate>Booked: {props?.dayView}</Rate>
                                    </Text>

                                    <Text>
                                        <div>Booked Date</div>
                                        <Rate2>{props?.date}</Rate2>
                                    </Text>

                                    <Text>
                                        <div></div>
                                        <Rate></Rate>
                                        <Space />
                                        <br />
                                    </Text>

                                    <Text>
                                        <div>Expires Date</div>
                                        <Rate2>{props?.expires}</Rate2>
                                    </Text>
                                    <Text>
                                        <div>Access Token</div>
                                        <Rate2>{props?.generatedToken}</Rate2>
                                    </Text>
                                    <Text>
                                        <div>Access</div>
                                        <Rate2>{props?.access ? <div>true</div> : <div>false</div>}</Rate2>
                                    </Text>

                                </Box>
                            ))
                        }

                    </Wid>
                </Wrapper>
            </Container>
        </div>
    );
};

export default HistoryTable;


const Space = styled.div`
margin-bottom: 16px;
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


const Button = styled.button`
	height: 40px;
	width: 120px;
	margin-top: 15px;
	font-family: poppins;
	border: 1px solid #dddddd;
	/* color: #6d6d6e; */
	color: #fff;
	border-radius: 3px;
	font-size: 15px;
	font-weight: 600;
	background-color: transparent;
	cursor: pointer;
	margin-right: 10px;
	@media (max-width: 500px) {
		height: 40px;
		width: 100px;
		font-size: 12px;
		margin-left: 10px;
		margin-right: 10px;
	}
`;

const Container = styled.div`
	height: 100%;
	width: 80%;
	background-color: #fff;
    margin-top: 20px;
`;
const Wrapper = styled.div`
	padding: 20px;
`;

const Title = styled.div`
	font-weight: bold;
	margin-bottom: 20px;
`;
const Table = styled.div`
	overflow-x: auto;
	font-size: 13px;
	table,
	th,
	td {
		border: 1px solid lightgray;
		border-collapse: collapse;
	}
	tr:nth-child(even) {
		background-color: #f2f2f2;
	}
	th,
	td {
		padding: 3px 10px;
	}

	th {
		font-size: 10px;
	}
`;