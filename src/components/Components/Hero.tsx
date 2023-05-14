import React from "react";
import styled from "styled-components";
import video from "../../assets/vid.mp4"
import { AiOutlineSearch } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import Button from "../reUse/Button";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div>
            <Container>
                <Main>
                    <Dava>

                        <TextHolder>
                            <Text>
                                Get your best work done with: <br />
                                <Typewriter
                                    options={{
                                        loop: true,
                                    }}
                                    onInit={(typewriter: any) => {
                                        typewriter

                                            .typeString("Developers...")
                                            .pauseFor(1000)
                                            .deleteAll()

                                            .start()
                                            .typeString("Constant Power...")
                                            .pauseFor(1000)
                                            .deleteAll()

                                            .start()
                                            .typeString("Networking...")
                                            .pauseFor(1000)
                                            .deleteAll()

                                            .start()
                                            .pauseFor(1000)
                                            .typeString("Build...");
                                    }}
                                /> <br />
                            </Text>

                            <Br />
                            <div style={{ display: "flex" }}>
                                <Link style={{ textDecoration: "none" }} to="/sign-in" >
                                    <Button title="Get Started" bg="white" tc="black"

                                    />
                                </Link>

                                <Link style={{ textDecoration: "none" }} to="/register"><Button title="Sign up" bg="darkorange" tc="white" />
                                </Link>

                            </div>
                        </TextHolder>
                        <Video src={video} autoPlay muted loop />
                        <MainHolder />
                    </Dava>
                </Main>
            </Container>
        </div>
    );
};

export default Hero;

const Br = styled.div`
  margin: 10px 0;
`;
const Icon2 = styled(AiOutlineSearch)`
  color: black;
  font-size: 30px;
`;
const Icon1 = styled(MdFavorite)`
  color: black;
  font-size: 30px;
`;
const Input = styled.input`
  flex: 1;
  height: 95%;
  outline: none;
  border: 0;
  font-size: 23px;

  ::placeholder {
    color: silver;
    margin-left: 10px;
  }
`;

const InputField = styled.div`
  display: flex;
  width: 500px;
  height: 60px;
  background-color: white;
  border-radius: 3px;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
`;

const Text = styled.div`
  width: 100%;
  font-size: 45px;
  text-align: center;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 700;
`;

const Dava = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  z-index: 1;
`;
const TextHolder = styled.div`
  color: white;
  font-size: 40px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

const MainHolder = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0,0,0.6);
  top: 0;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 700px;
`;
