import React from "react"
import settings from "../../../config/settings.json"
import Image from "../image"
import useLocales from "../../hooks/useLocales"
import styled from "styled-components"

interface Props {
  onClick: () => void
}
const MintButton: React.FC<Props> = ({ ...props }) => {
  const { locale } = useLocales()
  return (
    <ButtonContainer
      onClick={props.onClick}
      className="bg-white p-2 w-max flex justify-between items-center space-x-4 mr-3 "
    >
      <IconBox className="rounded-full">
        <div className="rounded-full p-[0.15rem] bg-white">
          <BlackCircle className="rounded-full p-2 bg-[#E3E8FF]">
            <Image src={settings.cardIcon} alt="card" />
          </BlackCircle>
        </div>
      </IconBox>
      <TextBox>
        <h4 className="text-sm font-semibold text-black sm:block hidden">
          {locale?.mint3DNFT}
        </h4>
        <h4 className="text-sm font-semibold text-black block sm:hidden uppercase">
          {locale?.mintAvatar}
        </h4>

        <p className="text-sm text-gray-600 hidden sm:block">
          {locale?.billedOnce}
        </p>
      </TextBox>
    </ButtonContainer>
  )
}

export default MintButton

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
