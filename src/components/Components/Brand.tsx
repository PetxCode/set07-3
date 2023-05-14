import React from 'react'
import styled from 'styled-components'
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.svg"
import img5 from "../../assets/5.png"
import img6 from "../../assets/6.png"
import img7 from "../../assets/7.svg"
import img8 from "../../assets/8.png"
import img9 from "../../assets/a1.png"
import back from "../../assets/22.svg"
import { Link } from "react-router-dom"


import { BiTimer } from "react-icons/bi"
import PeopleTalks from './PeopleTalks'

interface iMage {
    src: string
    h: string
}

interface iTitle {
    title: string
}

const Image: React.FC<iMage> = ({ src, h }) => {
    return (
        <ImgContainer>
            <Img src={src} h={h} />
        </ImgContainer>
    )
}

const BackTitle: React.FC<iTitle> = ({ title }) => {
    return (
        <TitleContainer>
            <TextTitle>{title}</TextTitle>
        </TitleContainer>
    )
}

const Brand = () => {
    return (
        <Container>
            <Text>Products built by People using Our Hub</Text>
            <ImageHolder>
                <Image src={img1} h="40px" />
                <Image src={img2} h="40px" />
                <Image src={img3} h="20px" />
                <Image src={img5} h="40px" />
                <Image src={img6} h="40px" />
                <Image src={img7} h="30px" />
                <Image src={img8} h="30px" />
            </ImageHolder>
            <br />
            <br />

            <HeadText>Flexible payment options.</HeadText>
            <SmallText>Flexible payment options.</SmallText>

            <PriceHolder>

                <Hover>
                    <ImagePlace>
                        <Items>
                            <Icon />

                            <Title>One Time Plan</Title>

                            <div style={{ display: "flex", justifyContent: "center" }} >
                                <Images src={img9} />
                            </div>

                            <Space />

                            <Cost>$2.5 <div>SAVE ₦152</div> </Cost>
                            <Same>Translate <br />in Naira: <div>₦1,000</div></Same>

                            <Action to="/sign-in">Start Now</Action>
                        </Items>
                    </ImagePlace>
                </Hover>

                <Hover>
                    <ImagePlace>
                        <Items>
                            <Icon />

                            <Title>One Week Plan</Title>

                            <div style={{ display: "flex", justifyContent: "center" }} ><Images src={img9} /></div>


                            <Space />

                            <Cost>$17.5 <div>SAVE ₦1,037</div> </Cost>
                            <Same>Translate <br />in Naira: <div>₦7,000</div></Same>

                            <Action to="/sign-in">Start Now</Action>
                        </Items>
                    </ImagePlace>
                </Hover>

                <Hover>
                    <ImagePlace>
                        <Items>
                            <Icon />

                            <Title>One month Plan</Title>
                            <div style={{ display: "flex", justifyContent: "center" }} > <Images src={img9} /></div>


                            <Space />

                            <Cost>$62.5 <div>SAVE ₦3,785</div> </Cost>
                            <Same>Translate <br />in Naira: <div>₦25,000</div></Same>

                            <Action to="/sign-in" >Start Now</Action>
                        </Items>
                    </ImagePlace>
                </Hover>

            </PriceHolder>

            <Bck>
                <Back>
                    <HeadTop>You too, can become a Product Design Expert. It starts here!</HeadTop>
                    <SmallText1>Take resounding step in your work and career. Things people do at the Co-Station:</SmallText1>
                    <br />
                    <br />
                    <div style={{ display: "flex", flexWrap: "wrap" }} >

                        <Inside>
                            <BackTitle title='User Research' />
                        </Inside>
                        <Inside>
                            <BackTitle title='User Test' />
                        </Inside>
                        <Inside>
                            <BackTitle title='FrontEnd Works' />
                        </Inside>
                        <Inside>
                            <BackTitle title='Networking' />
                        </Inside>
                        <Inside>
                            <BackTitle title='BackEnd Production' />
                        </Inside>
                    </div>
                </Back>
            </Bck>
            <PeopleTalks />
        </Container>
    )
}

export default Brand


const Inside = styled.div`
display:flex;
flex-wrap: wrap;
margin:5px

`;

const TextTitle = styled.div`

`;
const TitleContainer = styled.div`
border: 1px solid white;
border-radius: 30px;
padding: 10px 15px;
`;
const SmallText1 = styled.div`
width:80%
`;

const HeadTop = styled.div`
font-size: 45px;
font-weight: 600;
line-height: 1;
width: 80%;
margin-bottom:20px;

`

const Back = styled.div`
width: 90%;
background-image: url("/22.svg");
overflow: hidden;
background-position: center ;
background-size: cover ;
border-radius: 10px;
min-height: 300px;
color: white;
padding: 20px;
margin-top: 40px;
`;

const Bck = styled.div`
width: 100%;
display:flex;
justify-content: center;
`;


const Space = styled.div`flex:1`;

const Images = styled.img`
height: 150px;
margin-top:  -20px
`

const Action = styled(Link)`
text-decoration: none;
width: 100%;
display: flex;
justify-content: center;
background-color: darkorange;
padding:10px 0px;
color: white;
border-radius: 5px;
transition: all 350ms ;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
:hover{
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
`

const Same = styled.div`
margin-bottom: 20px;
display:flex;
align-items: center;
font-size: 10px;
opacity: 0.7;
font-weight: 700;
line-height: 1;
color: silver;
height: 100%;
padding-bottom:10px;

div{
    font-size: 18px;
    margin-left: 20px;
    opacity: 1;
    color: black
}

`
const Cost = styled.div`

margin-bottom: 10px;
display:flex;
font-weight: 700;
font-size: 30px;
align-items: center;

div{
    font-weight: 500;
    font-size: 8px;
    margin-left: 10px;
    background-color: purple;
    color: white;
    padding: 5px 10px;
    border-radius:3px
}
`

const Title = styled.div`
opacity: 0.6;
font-weight: 500;
font-size: 12px;
margin-bottom: 30px;
text-transform: uppercase;

`

const Icon = styled(BiTimer)``
const Items = styled.div`
 padding: 20px
`

const ImagePlace = styled.div`
width: 250px;
height: 400px;
background-color: white;
transition: all 300ms;
z-index: 1;
position: relative;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

`

const Hover = styled.div`
width: 250px;
height: 400px;
background-color: #c66f04;
position: relative;
display: block;
margin: 10px;

::before,
::after{
     content: "";
     position: absolute;
     display: inline-block;
     transition: all 300ms;
     background-color: #a85e03;
     width:10px;
     height: 10px;
}

::before{
    top:0;
    left: 0;
    transform-origin: top left;
    transform: rotate(45deg) scale(0);
}

::after{
    bottom:0;
    right: 0;
    transform-origin: bottom right;
    transform: rotate(45deg) scale(0);
}

:hover ${ImagePlace}{
    transform: translate(8px, -8px);
}

:hover::before{
    transform: rotate(-45deg) scale(1);
}

:hover::after{
    transform: rotate(45deg) scale(1);
}
`


const Img = styled.img<{ h: string }>`
height: ${({ h }) => h};
margin: 0 10px;
`

const PriceBox = styled.div`
width: 200px;
height: 400px;
background-color: red;
position: relative;
transition: all 300ms;
z-index:10;
`

const Box = styled.div`
width: 200px;
height: 400px;
background-color: black;
position: relative;
display: block;

::before,
::after{
    content: "";
    display: inline-block;
    position: absolute;
    background-color: black;
    transition: all 350ms;
    height: 8px;
    width: 8px;
}

::before{
    top: 0;
    left: 0;
    transform-origin:top left ;
    transform: scale(0);
}

::after{
    bottom: 0;
    right: 0;
    transform-origin:bottom right ;
    transform: scale(0);
}

:hover ${PriceBox} {
    transform: translate(8px, -8px);
}

`
const PriceHolder = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`


const SmallText = styled.div`
margin-bottom: 20px;
`

const ImgContainer = styled.div``

const ImageHolder = styled.div`
display:flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`

const HeadText = styled.div`

padding-top:10px;
padding-bottom:10px;
font-weight: bold;
font-size: 30px; 
`

const Text = styled.div`
padding-top:30px;
padding-bottom:30px;
font-weight: bold;
font-size: 20px; 
text-align: center;
`


const Container = styled.div`
width:100%;
display:flex;
flex-direction: column;
align-items: center;
padding:30px 0 ;
min-height: 200px;
background-color: #F6F8F9;
`