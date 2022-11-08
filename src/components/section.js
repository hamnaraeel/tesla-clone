import React from 'react'
import styled from 'styled-components'

function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <ItemText>
            <h1>{ title }</h1>
            <p>{ description }</p>
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <LeftButton>
                        {leftBtnText}
                </LeftButton>
                { rightBtnText &&
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                }
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
    </Wrap>
  )
}

export default Section;

const Wrap =  styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    background-image: ${props => `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
    padding-top: 15px;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    justify-content : center;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 259px;
    color: white;
    display: flex;
    justify-content: center;
    border-radius: 50px;
    align-items: center;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`
const DownArrow = styled.img`
    height: 40px;
    overflow: hidden;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div``
