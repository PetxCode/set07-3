import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { usePaystackPayment } from 'react-paystack';
import axios from "axios";
import { useGetUser } from "../../hooks/useGetUser";
import Swal from "sweetalert2";
import { useGetHistory } from "../../hooks/useGetHistory";
import crypto from "crypto"
import { v4 as uuid } from "uuid"


const MakePayment: React.FC = () => {

    // http://localhost:4455/api/booking/645e86138c55c3116613fd32/create-bookings
    const url: string = "http://localhost:4455";

    const user: any = useGetUser()
    const history: any = useGetHistory()
    const navigate = useNavigate();
    const [data, setData] = useState(0);


    const config: any = {
        reference: (new Date()).getTime().toString(),
        // reference: uuid(),
        email: user?.email,
        amount: data * 1000 * 100,
        // publicKey: 'pk_live_2732df7378e84dbe0013bb9fd7f00faad438e244',
        publicKey: 'pk_test_d632bf4b9aa1e74745eb158cec8034961dc13b18',
    };



    const booking = async () => {
        await axios.post(`${url}/api/booking/${user._id}/create-bookings`, { days: data })
        await axios.get(`${url}/api/booking/${user._id}/${history[0]?._id}/view-bookings`)


    }

    const onSuccess = () => {
        // /:id/:bookingID/view-bookings
        booking()
    };

    const onClose = () => {

    }
    const initializePayment = usePaystackPayment(config);

    useEffect(() => {

    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center" }} >
            <Container>
                <Wrapper>
                    <Title>Reading data of History Logs</Title>



                    <Form >
                        <Text>
                            {
                                data ? <div>Your billing is: ₦{data * 1000} for {data} days</div> : null
                            }
                        </Text>
                        <InputHolder>
                            <Blocker>Book in Days</Blocker>

                            <Input
                                placeholder="For How Long are you booking"
                                value={data}
                                type="number"
                                onChange={(e: any) => setData(e.target.value)}
                            />
                        </InputHolder>



                        <br />
                        <Button type="submit" bg="darkorange" onClick={() => {
                            initializePayment(onSuccess, onClose)
                        }} >
                            proceed to payment
                        </Button>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    );
};

export default MakePayment;

const Blocker = styled.div`
  position: absolute;
  top: -3px;
  background-color: white;
  padding: 0 5px;
  font-size: 12px;
  left: 10px;
  color: purple;
`;

const InputHolder = styled.div`
  position: relative;
  width: 230px;
  margin: 10px 0;
`;



const Input = styled.input`
  width: 90%;
  outline: none;
  border: 1px solid purple;
  height: 40px;
  margin: 5px 0;
  border-radius: 3px;
  padding-left: 10px;

  ::placeholder {
    font-family: Poppins;
  }
`;

const Form = styled.div`
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  
`;

const Space = styled.div`
margin-bottom: 16px;
`

const Text = styled.div`
font-weight: 800;
margin-right: 20px;
margin-bottom: 20px;
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
const Button = styled.button<{ bg: string }>`
  outline: none;
  border: 0;
  text-align: center;
  margin: 10px;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  background-color: ${({ bg }) => bg};
  font-size: 15px;
  text-transform: uppercase;
  transition: all 350ms;
  margin-bottom: 20px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

const Container = styled.div`
	height: 100%;
	width: 90%;
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