import React from 'react'
import styled from 'styled-components'


interface iButton {
    bg?: string;
    title?: string;
    tc?: string;
    onClick?: () => void
}

const Button: React.FC<iButton> = ({ bg, title, tc, onClick }) => {
    return (
        <div>
            <Container bg={`${bg}`} onClick={onClick}>
                <Main tc={`${tc}`}>{title}</Main>
            </Container>
        </div>
    )
}

export default Button

const Main = styled.div<{ tc: string }>`
font-size: 12px;
font-weight: 500;
color: ${({ tc }) => tc}
`
const Container = styled.div<{ bg: string }>`
padding: 6px 10px;
background-color: ${({ bg }) => bg};
border-radius: 3px;
margin: 0 5px;
transition: all 350ms;
display: flex;
justify-content: center;
align-items: center;
:hover{
    cursor: pointer;
    transform: scale(1.04);
}
`