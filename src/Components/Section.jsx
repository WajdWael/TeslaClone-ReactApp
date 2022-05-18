import React from 'react'
import  Fade  from 'react-reveal/Fade'
import styled from "styled-components"

export default function Section({title, description, backgroundImage, leftBtn, rightBtn }) {
    return (
        <Wrap bgImage={backgroundImage}>
            <Fade bttom>
                <ItemText>
                    <h1>{title }</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtn}
                        </LeftButton>
                        {rightBtn && 
                            <RightButton>
                                {rightBtn}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    )
}

const Wrap = styled.div`
    z-index: -10;
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ItemText = styled.div`
    padding-top: 19vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    justify-content: center;

    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 14px;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: #fff;
    opacity: .65;
    color: #111;
`

const DownArrow = styled.img`
    height:40px; 
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``
