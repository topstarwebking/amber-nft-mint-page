import React from "react"
import settings from "../../../config/settings.json"
import Image from "../image"
import useLocales from "../../hooks/useLocales"
import styled from "styled-components"

interface Props {
  className: string
  onClick: () => void
}

const SingleMintButton: React.FC<Props> = ({ ...props }) => {
  const { locale } = useLocales()
  return (
    <ButtonContainer {...props} onClick={props.onClick}>
      <TextBox>
        <h4 className="text-[32px] font-semibold text-black">{locale?.mint}</h4>
      </TextBox>
    </ButtonContainer>
  )
}

export default SingleMintButton

const ButtonContainer = styled.button`
  border: solid 3px transparent;
  border-radius: 22px;
  cursor: pointer;
  background-image: linear-gradient(to bottom, #ffbcdd, #ffd4cb);
  box-shadow: 0 7px 20px 0px #ffbcdd, 2px 1000px 1px #fff inset;
  background-origin: border-box;

  &:hover {
    background-image: linear-gradient(to bottom, #f389bd, #fdc3b7);
  }
  &:active {
    background-image: linear-gradient(to bottom, #1960ca, #766bf6);
    color: white;
    box-shadow: 0 7px 20px 0px #6fccff, 2px 1000px 1px #05a3ff inset;
  }
`
const IconBox = styled.div`
  width: 52px;
  border: 3px solid transparent;
  background-image: linear-gradient(
    42deg,
    rgb(255, 188, 221) 0%,
    rgb(255, 211, 202) 50%,
    rgb(6, 164, 255) 100%
  );
  background-origin: border-box;
  box-shadow: 2px 1000px 1px #fff inset;
`
const TextBox = styled.div`
  text-align: start;
`

const BlackCircle = styled.div`
  border: 1px solid black;
`
